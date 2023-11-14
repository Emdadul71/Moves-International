import "./../styles/main.scss";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/modules/@layout/header";
import Footer from "@/modules/@layout/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/main.scss";

const jost = IBM_Plex_Sans({
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Trusted Education & Migration Consultants",
  description:
    "When you want solutions about your profession, education, visa or health insurance, you deserve the best as you try it from your soul.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
