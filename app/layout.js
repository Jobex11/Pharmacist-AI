import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "healthcare",
  description: "FloglogPharma; Bridging Healthcare Gaps for a Healthier Africa",
  icons: {
    icon: "/Logo.png", // This should point to your logo in the public directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
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
