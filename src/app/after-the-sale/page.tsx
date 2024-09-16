import { Metadata } from "next";

// Components
import Header from "@/sections/after-the-sale/header/header.tsx";
import AfterTheLequidations from "@/sections/after-the-sale/after-the-lequidations/afterTheLequidations";
import Settlement from "@/sections/after-the-sale/settlement/settlement";
import RealtorService from "@/sections/after-the-sale/realtor-service/realtorService";
import Contact from "@/sections/contact/contact";

export const metadata: Metadata = {
  title: "After the Sale in Chattanooga - Five Star Estate Liquidations",
  description:
    "Learn about our post-estate sale services in Chattanooga at Five Star Estate Liquidations, including leftover item removal, settlement, and Realtor services to maximize your property's value.",
  keywords: [
    "Chattanooga post-estate sale services", "estate sale leftovers Chattanooga", "estate liquidation cleanup Chattanooga", 
    "charitable donation Chattanooga", "Chattanooga estate sale settlement", "detailed accounting Chattanooga estate sale", 
    "estate sale proceeds Chattanooga", "auction consignment settlement Chattanooga", "Chattanooga Realtor services", 
    "real estate agent Chattanooga", "property staging services Chattanooga", "home staging Chattanooga", 
    "maximize listing price Chattanooga", "minor repairs estate sale Chattanooga", "preferred contractors Chattanooga estate sale", 
    "Tennessee estate sale services", "Chattanooga estate liquidation settlement", "estate sale cleanup Chattanooga", 
    "estate sale donations Chattanooga", "tax-deductible donation receipt Chattanooga", "estate sale bidding Chattanooga", 
    "estate sale dealers Chattanooga", "Chattanooga estate sale settlement process", "Chattanooga estate sale finalization", 
    "house cleaning Chattanooga estate sale", "broom clean estate sale Chattanooga", "Chattanooga estate sale contractor network", 
    "Chattanooga post-sale real estate services", "Realtor Chattanooga estate sale", "home staging Chattanooga Tennessee", 
    "property value maximization Chattanooga", "real estate services after estate sale Chattanooga", "Chattanooga estate sale auction services", 
    "Tennessee real estate staging", "estate sale final accounting Chattanooga", "Chattanooga estate sale check", 
    "post-sale property staging Chattanooga", "home staging for higher offers Chattanooga", "Chattanooga estate sale repairs", 
    "estate sale realtor network Chattanooga", "property cleanup after estate sale Chattanooga", "estate sale final steps Chattanooga", 
    "Chattanooga estate liquidation process", "Chattanooga estate sale remaining items", "real estate services Chattanooga estate sale", 
    "home staging benefits Chattanooga", "property staging for sale Chattanooga", "estate sale property enhancement Chattanooga", 
    "Chattanooga Tennessee estate sale experts", "estate liquidation professionals Chattanooga", "post-sale settlement services Chattanooga", 
    "estate sale charity donations Chattanooga", "donate estate sale leftovers Chattanooga", "post-estate sale procedures Chattanooga", 
    "estate sale contractor services Chattanooga", "real estate listing enhancements Chattanooga", "property value improvements Chattanooga", 
    "Chattanooga estate liquidation settlement process", "Tennessee property staging Chattanooga", "estate sale finalization steps Chattanooga", 
    "Realtor services Chattanooga Tennessee", "home improvement Chattanooga estate sale", "Chattanooga estate sale final proceeds", 
    "real estate agent post-estate sale Chattanooga", "estate sale contractor partnerships Chattanooga", "home staging experts Chattanooga", 
    "Tennessee estate liquidators Chattanooga", "Chattanooga estate sale process final steps", "maximize home sale price Chattanooga", 
    "Chattanooga estate sale cleanup services", "property staging post-estate sale Chattanooga", "Chattanooga estate liquidation completion", 
    "post-sale real estate enhancement Chattanooga", "estate sale completion services Chattanooga", "real estate post-sale services Chattanooga", 
    "estate liquidation Realtor services Chattanooga", "property staging and repair Chattanooga", "post-sale estate services Chattanooga", 
    "Tennessee estate liquidation company Chattanooga", "estate sale property staging Chattanooga", "home repair for estate sale Chattanooga", 
    "Realtor Chattanooga estate liquidation", "estate sale final checklist Chattanooga", "Chattanooga estate sale and property staging"
  ].join(", "),
  openGraph: {
    title: "After the Sale in Chattanooga - Five Star Estate Liquidations",
    description:
      "Explore our comprehensive post-sale services in Chattanooga at Five Star Estate Liquidations, including leftover item removal, settlement, and real estate services to enhance your property's value.",
    url: "https://chattanoogaestatesale.com/after-the-sale",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/after-the-lequidations.png",
        width: 1200,
        height: 630,
        alt: "Post Estate Sale Services in Chattanooga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "After the Sale in Chattanooga - Five Star Estate Liquidations",
    description:
      "Discover our post-sale services in Chattanooga at Five Star Estate Liquidations, including item removal, settlement, and Realtor services for property value enhancement.",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Chattanooga",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://chattanoogaestatesale.com/after-the-sale",
  },
};


export default function AfterTheSale() {
  return (
    <main>
      <Header />
      <AfterTheLequidations />
      <Settlement />
      <RealtorService />
      <Contact />
    </main>
  );
}
