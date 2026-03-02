import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Compass & Key Group | Elizabethtown KY Real Estate",
    template: "%s | Compass & Key Group",
  },
  description:
    "Veteran-owned real estate brokerage serving Elizabethtown, Fort Knox, and Central Kentucky. Buy, sell, or relocate with a team built on integrity, service, and results.",
  openGraph: {
    title: "Compass & Key Group | Elizabethtown KY Real Estate",
    description:
      "Veteran-owned real estate brokerage serving Elizabethtown, Fort Knox, and Central Kentucky.",
    type: "website",
    locale: "en_US",
    siteName: "Compass & Key Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
