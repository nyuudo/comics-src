import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "Omgili", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "ImagesiftBot", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
    ],
    sitemap: "https://comics-src.com/sitemap.xml",
  };
}
