"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate form data
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    // In a real production app, you would send this to your email provider or CRM.
    // e.g., using Resend, SendGrid, or saving to a database.
    // For now, we simulate a network request that always succeeds.
    console.log(`[Form Submitted] Name: ${name}, Email: ${email}, Message: ${message}`);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
