import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Himastech | Data-Driven Digital Marketing",
    short_name: "Himastech",
    description: "Modern digital marketing agency and training academy dedicated to scaling brands with precision Meta & Google ad funnels.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0284c7",
    icons: [
      {
        src: "/logo-main.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-main.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
