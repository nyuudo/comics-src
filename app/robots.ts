import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "GPTBot",
      disallow: "/",
    },
    sitemap: "https://comics-src.com/sitemap.xml",
  };
}
