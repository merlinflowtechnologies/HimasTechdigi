import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Himastech Digi | Data-Driven Digital Marketing",
    short_name: "Himastech Digi",
    description: "Himastech Digi (himastechdigi.com) - Premier performance marketing agency and talent academy scaling brands with Meta & Google ad funnels.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0284c7",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
