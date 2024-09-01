import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const poppins = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const metadata = {
  title: "FlologPharma",
  description: "FlologPharma; Bridging Healthcare Gaps for a Healthier Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
