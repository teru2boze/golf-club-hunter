import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://golf-club-hunter.vercel.app";

  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/disclosure",
    "/privacy",

    "/ranking/beginner-drivers-2026",
    "/ranking/mid-handicap-drivers-2026",
    "/ranking/advanced-drivers-2026",
    "/ranking/longest-drivers-2026",

    "/compare/elyte-x-vs-quantum-max",
    "/compare/g430-max-10k-vs-elyte-x",
    "/compare/g430-max-10k-vs-qi35-max",
    "/compare/g430-max-vs-qi4d",
    "/compare/g430-max-vs-qi35-max",
    "/compare/g430-max-vs-quantum-max",
    "/compare/g430-max-vs-zxi-max",
    "/compare/g440-max-vs-ds-adapt-max-k",
    "/compare/g440-max-vs-elyte-x",
    "/compare/g440-max-vs-g430-max",
    "/compare/g440-max-vs-g430-max-10k",
    "/compare/g440-max-vs-gt2",
    "/compare/g440-max-vs-qi4d",
    "/compare/g440-max-vs-qi35-max",
    "/compare/g440-max-vs-quantum-max",
    "/compare/g440-max-vs-zxi-max",
    "/compare/qi4d-vs-elyte-x",
    "/compare/qi4d-vs-qi35-max",
    "/compare/qi4d-vs-quantum-max",
    "/compare/qi35-max-vs-elyte-x",
    "/compare/qi35-max-vs-quantum-max",
  ];

  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/ranking/") ? 0.9 : 0.8,
  }));
}