import { shop } from "./site-config";

export const siteUrl = "https://www.richardsbarbershop.com";
export const siteTitle = "Richard's Barbershop | San Antonio, TX";
export const siteDescription = "Book haircuts, beard trims, shaves, and perms at Richard's Barbershop, 8494 Fredericksburg Rd in San Antonio, TX. View prices and book online.";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${siteUrl}/#business`,
  name: shop.name,
  url: siteUrl,
  description: siteDescription,
  telephone: shop.phone,
  image: shop.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: shop.address,
    addressLocality: "San Antonio",
    addressRegion: "TX",
    postalCode: "78229",
    addressCountry: "US",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Barbershop services",
    itemListElement: shop.services.map((service) => ({
      "@type": "Offer",
      price: service.price,
      priceCurrency: "USD",
      itemOffered: { "@type": "Service", name: service.title },
    })),
  },
};
