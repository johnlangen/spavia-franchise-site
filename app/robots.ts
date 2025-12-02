import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "Yandex",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "Exabot",
        disallow: "/",
      },
      {
        userAgent: "SMTBot",
        disallow: "/",
      },
      {
        userAgent: "Mimobot",
        disallow: "/",
      },
    ],
    sitemap: "https://spaviafranchise.com/sitemap.xml",
  };
}
