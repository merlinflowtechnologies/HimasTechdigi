import { NextResponse } from "next/server";

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  email?: string;
  rating: number;
  category: string;
  text: string;
  time: string;
  status: "approved" | "pending" | "rejected";
  createdAt: number;
}

// In-memory store for server runtime (backed by client localStorage sync)
let reviewsStore: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rohit Verma",
    role: "Founder, D2C Apparel Brand",
    email: "rohit@d2capparel.in",
    rating: 5,
    category: "Performance Marketing & ROAS",
    text: "Himastech scaled our Meta & Google ad spend from ₹4L to ₹28L/month while increasing our ROAS from 2.4x to 4.8x. The creative iteration speed is unmatched.",
    time: "2 days ago",
    status: "approved",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000
  },
  {
    id: "rev-2",
    name: "Ananya Iyer",
    role: "Alumni, ROAS Acceleration Track",
    email: "ananya.iyer@gmail.com",
    rating: 5,
    category: "Digital Marketing Academy Tracks",
    text: "The curved roadmaps and live ad account audits gave me hands-on confidence. Landed a Senior Media Buyer role at an agency within 3 weeks of graduation!",
    time: "1 week ago",
    status: "approved",
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000
  },
  {
    id: "rev-3",
    name: "Vikram Malhotra",
    role: "VP Marketing, B2B SaaS",
    email: "vikram@syncflow.io",
    rating: 5,
    category: "Account Strategy & Communication",
    text: "Their Generative Engine Optimization (GEO) got our software brand featured inside ChatGPT and Perplexity answers for our top high-intent keywords.",
    time: "2 weeks ago",
    status: "approved",
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000
  }
];

const ADMIN_PASSCODE = "himasadmin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const adminKey = searchParams.get("adminKey");

  if (adminKey === ADMIN_PASSCODE) {
    return NextResponse.json({
      success: true,
      all: reviewsStore,
      approved: reviewsStore.filter((r) => r.status === "approved"),
      pending: reviewsStore.filter((r) => r.status === "pending")
    });
  }

  // Public visitors only see approved reviews
  return NextResponse.json({
    success: true,
    approved: reviewsStore.filter((r) => r.status === "approved")
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, rating, category, text } = body;

    if (!name || !text) {
      return NextResponse.json({ success: false, error: "Name and review text are required" }, { status: 400 });
    }

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      role: company?.trim() || "Verified Client",
      email: email?.trim() || undefined,
      rating: Number(rating) || 5,
      category: category || "Performance Marketing & ROAS",
      text: text.trim(),
      time: "Just now",
      status: "pending",
      createdAt: Date.now()
    };

    reviewsStore.unshift(newReview);

    return NextResponse.json({
      success: true,
      message: "Feedback submitted successfully! It is pending admin approval.",
      review: newReview
    });
  } catch (err: unknown) {
    console.error("Error creating review:", err);
    return NextResponse.json({ success: false, error: "Failed to process review submission" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, adminKey } = body;

    if (adminKey !== ADMIN_PASSCODE) {
      return NextResponse.json({ success: false, error: "Unauthorized admin access" }, { status: 401 });
    }

    const targetReview = reviewsStore.find((r) => r.id === id);
    if (!targetReview) {
      return NextResponse.json({ success: false, error: "Review not found" }, { status: 404 });
    }

    if (status === "approved" || status === "rejected" || status === "pending") {
      targetReview.status = status;
    }

    return NextResponse.json({
      success: true,
      message: `Review has been marked as ${status}.`,
      review: targetReview,
      approved: reviewsStore.filter((r) => r.status === "approved"),
      pending: reviewsStore.filter((r) => r.status === "pending")
    });
  } catch (err: unknown) {
    console.error("Error updating review:", err);
    return NextResponse.json({ success: false, error: "Failed to update review status" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const adminKey = searchParams.get("adminKey");

    if (adminKey !== ADMIN_PASSCODE) {
      return NextResponse.json({ success: false, error: "Unauthorized admin access" }, { status: 401 });
    }

    reviewsStore = reviewsStore.filter((r) => r.id !== id);

    return NextResponse.json({
      success: true,
      message: "Review removed successfully.",
      approved: reviewsStore.filter((r) => r.status === "approved"),
      pending: reviewsStore.filter((r) => r.status === "pending")
    });
  } catch (err: unknown) {
    console.error("Error deleting review:", err);
    return NextResponse.json({ success: false, error: "Failed to delete review" }, { status: 500 });
  }
}
