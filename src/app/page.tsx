import Image from "next/image";
import type { Metadata } from "next";

// Components
import Scheduler from "@/components/individual/scheduler/scheduler";
import Header from '@/sections/header/header';
import About from "@/sections/about/about";
import Marketing from "@/sections/marketing/marketing";
import WhyUs from "@/sections/whyUs/whyUs";
import Mission from "@/sections/mission/mission";
import Services from "@/sections/services/services";
import Cta from "@/sections/cta/cta";
import Ftf from "@/sections/ftf/ftf";
import Faq from "@/sections/faq/faq";
import Contact from "../sections/contact/contact";

// Styles
import './globals.css';
import './globals.scss';

export const metadata: Metadata = {
  title: "Best Estate Sales in Chattanooga | Five Star Estate Liquidations",
  description:
    "Looking for the best estate sales in Chattanooga? Five Star Estate Liquidations offers top-notch estate sales, auctions, and liquidation services in Chattanooga and surrounding areas. Trust us to handle your property with care and professionalism.",
  icons: "/logo.png",
  keywords: [
    "best estate sales Chattanooga",
    "estate liquidation Chattanooga",
    "estate auctions Chattanooga",
    "property sales Chattanooga",
    "Chattanooga estate sales",
    "Chattanooga liquidation services",
    "Chattanooga estate auctions",
    "estate sale companies Chattanooga",
    "estate sale services Chattanooga",
    "Hamilton County estate sales",
    "local estate sales Chattanooga",
    "furniture sales Chattanooga",
    "moving sales Chattanooga",
    "house sales Chattanooga",
    "estate liquidation Hamilton County",
    "Chattanooga property liquidation",
    "estate sales near Hamilton County",
    "Chattanooga TN estate sales",
    "Chattanooga TN liquidation",
    "Chattanooga estate sale experts",
    "best estate liquidation Chattanooga",
    "estate auctions near Chattanooga",
    "estate sale companies Hamilton County",
    "Chattanooga estate liquidators",
    "estate sale events Chattanooga",
    "Hamilton County property liquidation",
    "estate sales and auctions Chattanooga",
    "estate cleanouts Chattanooga",
    "Chattanooga estate buyouts",
    "local estate liquidation Chattanooga",
    "Chattanooga TN moving sales",
    "Chattanooga property auctions",
    "real estate sales Chattanooga TN",
    "estate sales services near Chattanooga",
    "antiques sales Chattanooga TN",
    "household estate sales Chattanooga",
    "garage sales Chattanooga TN",
    "yard sales Chattanooga TN",
  ].join(", "),
  openGraph: {
    title: "Best Estate Sales in Chattanooga | Five Star Estate Liquidations",
    description:
      "Discover the best estate sales in Chattanooga with Five Star Estate Liquidations. We offer comprehensive estate sale services in Chattanooga and Hamilton County, ensuring a smooth and profitable transition.",
    url: "https://chattanoogaestatesale.com/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Best Estate Sales in Chattanooga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Estate Sales in Chattanooga | Five Star Estate Liquidations",
    description:
      "Five Star Estate Liquidations is your go-to for the best estate sales in Chattanooga. We provide expert estate sale and liquidation services in Chattanooga and surrounding areas.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Chattanooga Estate Sales",
      },
    ],
  },
  alternates: {
    canonical: "https://chattanoogaestatesale.com/",
  },
};



export default function Home() {
  return (
    <main>
      <Scheduler />
      <Header />
      <About />
      <Marketing />
      <WhyUs />
      <Mission />
      <Services />
      <Cta />
      <Ftf />
      <Faq />
      <Contact />
    </main>
  );
}
