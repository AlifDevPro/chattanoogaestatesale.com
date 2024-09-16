import { Metadata } from "next"

//components
import Header from "@/sections/staff/header/ourStaff"
import OurStaff from "@/sections/staff/our-staff/ourStaff"
import StaffDay from "@/sections/staff/staffDay/staffDay"
import Contact from "@/sections/contact/contact"

export const metadata: Metadata = {
  title: "Our Staff - Five Star Estate Liquidations in Chattanooga",
  description:
    "Meet the professional team at Five Star Estate Liquidations in Chattanooga. From estate consulting to auction management, our experienced staff ensures a smooth and successful estate sale process in Chattanooga and the surrounding areas.",
  keywords: [
    "estate liquidation staff Chattanooga", "estate sale professionals Chattanooga", "Chattanooga estate liquidation", 
    "professional estate team Chattanooga", "Chattanooga estate sales staff", "auction staff Chattanooga", 
    "estate consulting team Chattanooga", "estate appraisers Chattanooga", "property accessors Chattanooga", 
    "estate sale management Chattanooga", "Tennessee estate sale team", "professional estate consultants Chattanooga", 
    "Chattanooga estate appraisers", "estate sale security Chattanooga", "estate sale parking attendants Chattanooga", 
    "estate sale crowd control Chattanooga", "estate sale accounting Chattanooga", "estate liquidation services Chattanooga", 
    "estate sale experts Chattanooga", "estate sale planning Chattanooga", "Chattanooga estate sale company", 
    "estate liquidation management Chattanooga", "estate sale preparation Chattanooga", "professional estate sale staff Chattanooga", 
    "Tennessee auction staff", "estate sale consultation Chattanooga", "estate sale day staff Chattanooga", 
    "estate sale security team Chattanooga", "Chattanooga estate liquidation experts", "estate liquidation appraisers Chattanooga", 
    "estate sales management Chattanooga", "estate sale support staff Chattanooga", "estate auction professionals Chattanooga", 
    "estate sale assistance Chattanooga", "professional estate sale service Chattanooga", "Tennessee estate liquidation professionals", 
    "estate sale organization Chattanooga", "estate sale logistics Chattanooga", "estate sale appraisers Tennessee", 
    "Chattanooga property accessors", "estate sale services Tennessee", "estate liquidation team Chattanooga", 
    "estate sale staffing Chattanooga", "estate liquidation staffing Chattanooga", "Chattanooga estate sale consultants", 
    "estate sale appraisal experts Chattanooga", "estate sale security services Chattanooga", "estate sale crowd control team Chattanooga", 
    "professional estate sale management Chattanooga", "Tennessee estate sale professionals", "estate liquidation consulting Chattanooga", 
    "estate sale process Chattanooga", "estate sale uniformed staff Chattanooga", "Tennessee estate liquidation services Chattanooga", 
    "estate sale consultation Chattanooga", "estate liquidation company Chattanooga", "estate sale business Chattanooga", 
    "estate liquidation firm Chattanooga", "professional estate liquidators Chattanooga", "estate sale day preparation Chattanooga", 
    "Chattanooga estate sale experts", "estate sale uniformed team Chattanooga", "estate liquidation specialists Chattanooga", 
    "estate sale logistics team Chattanooga", "estate sale business Chattanooga", "Tennessee estate sale management Chattanooga", 
    "estate liquidation support Chattanooga", "estate sale services Chattanooga", "estate sale security Chattanooga", 
    "Tennessee estate crowd control Chattanooga", "estate sale parking services Chattanooga", "estate sale financial management Chattanooga", 
    "estate sale pricing control Chattanooga", "estate sale account management Chattanooga", "estate liquidation expertise Chattanooga", 
    "Chattanooga estate sale professionals", "estate liquidation consulting Chattanooga", "Chattanooga estate liquidation team"
  ].join(", "),
  openGraph: {
    title: "Our Staff in Chattanooga - Five Star Estate Liquidations",
    description:
      "Discover the team behind Five Star Estate Liquidations in Chattanooga. Our experienced professionals handle every aspect of estate sales, ensuring a smooth and successful process for you in Chattanooga and the surrounding areas.",
    url: "https://chattanoogaestatesale.com/our-staff",
    type: "website",
    locale: "en_US",
    siteName: "Five Star Estate Liquidations",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Five Star Estate Liquidations Staff in Chattanooga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Our Staff in Chattanooga - Five Star Estate Liquidations",
    description:
      "Meet the professional team at Five Star Estate Liquidations in Chattanooga. From consulting to auctions, our experienced staff ensures a smooth and successful estate sale process.",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        alt: "Five Star Estate Liquidations Staff in Chattanooga",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://chattanoogaestatesale.com/our-staff",
  },
};



export default function Staff() {
    return(
        <main>
            <Header />
            <OurStaff />
            <StaffDay />
            <Contact />
        </main>
    )
}
