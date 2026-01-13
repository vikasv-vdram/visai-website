import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://visaipro.in",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/services/registrations",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/services/accounting",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/services/gst-it-filings",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/terms",
      lastModified: new Date(),
    },
    {
      url: "https://visaipro.in/disclaimer",
      lastModified: new Date(),
    },
  ];
}
