import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://golf-club-hunter.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compare/qi4d-vs-qi35-max`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/qi4d-vs-quantum-max`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
  url: `${baseUrl}/compare/g440-max-vs-g430-max`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/compare/g440-max-vs-qi35-max`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},    
{
  url: `${baseUrl}/compare/g440-max-vs-qi4d`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},    
{
  url: `${baseUrl}/compare/g430-max-vs-qi4d`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},    
{
  url: `${baseUrl}/compare/g430-max-vs-qi35-max`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},    
{
  url: `${baseUrl}/compare/qi35-max-vs-quantum-max`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/compare/g440-max-vs-elyte-x`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://golf-club-hunter.vercel.app/compare/g440-max-vs-quantum-max",
  lastModified: new Date(),
},
{
  url: "https://golf-club-hunter.vercel.app/compare/qi35-max-vs-elyte-x",
  lastModified: new Date(),
},
{
  url: "https://golf-club-hunter.vercel.app/compare/g430-max-10k-vs-qi35-max",
  lastModified: new Date(),
},
{
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}