import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karats - Loyalty Rewards",
    short_name: "Karats",
    description: "Loyalty rewards system for partner cafes",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#6B46C1",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["lifestyle", "food"],
    lang: "en",
  }
}
