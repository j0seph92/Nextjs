import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";
import "./responsive.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Popup from "./Components/Popup";
import FloatingIcons from "./Components/FloatingIcons";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "500", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "futureavo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressContentEditableWarning
        className={`${poppins.className} overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingIcons />
        {/* <Popup /> */}
        <Script src="/assets/custom-scritp.js" />
      </body>
    </html>
  );
}
