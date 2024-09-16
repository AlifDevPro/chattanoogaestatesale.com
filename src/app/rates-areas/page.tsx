import Header from "@/sections/rates-areas/header/header"
import OurRates from "@/sections/rates-areas/our-rates/ourRates"
import Areas from "@/sections/rates-areas/areas/areas"
import Contact from "@/sections/contact/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Liquidation Rates & Areas in Chattanooga - Five Star Estate Liquidations",
  description:
    "Discover our comprehensive estate liquidation services in Chattanooga and the surrounding areas. We offer transparent, commission-based rates, covering various estate sizes and needs in Chattanooga.",
  keywords: [
    "Chattanooga estate liquidation", "estate sales Chattanooga", "Hamilton County estate sales", 
    "estate planning Chattanooga", "estate consultation Chattanooga", "Chattanooga estate services", 
    "estate liquidation rates Chattanooga", "commission-based estate sale Chattanooga", 
    "estate sale contract Chattanooga", "estate sale process Chattanooga", "estate sale expenses Chattanooga", 
    "no up-front fees Chattanooga", "professional signage Chattanooga", "estate advertising Chattanooga", 
    "labor costs in estate sales Chattanooga", "estate sale management Chattanooga", 
    "Hamilton County estate liquidation", "Chattanooga estate liquidation services", 
    "Chattanooga estate sale company", "estate sale experts Chattanooga", 
    "estate liquidation Chattanooga", "Tennessee estate liquidation services Chattanooga", 
    "estate sale management Chattanooga", "estate sale consultation Chattanooga", 
    "estate liquidation contract Chattanooga", "Tennessee estate liquidation Chattanooga", 
    "Five Star Estate Liquidations Chattanooga", "estate liquidation Hamilton County", 
    "Hamilton County estate liquidation services", "Chattanooga estate sales company"
  ].join(", "),
  openGraph: {
    title: "Estate Liquidation Rates & Areas in Chattanooga - Five Star Estate Liquidations",
    description:
      "Serving Chattanooga and the surrounding areas with comprehensive estate liquidation services. Learn more about our commission-based rates and the areas we cover in Chattanooga.",
    url: "https://chattanoogaestatesales.com/rates-areas",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Estate Liquidation Services in Chattanooga and the Surrounding Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Estate Liquidation Rates & Areas in Chattanooga - Five Star Estate Liquidations",
    description:
      "Comprehensive estate liquidation services in Chattanooga and the surrounding areas. Learn about our commission-based rates and coverage areas in Chattanooga.",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        alt: "Estate Liquidation Services in Chattanooga and the Surrounding Areas",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://chattanoogaestatesales.com/rates-areas",
  },
};




export default function RatesAreas() {
    return(
        <main>
            <Header />
            <OurRates />
            <Areas />
            <Contact />
        </main>
    )
}
