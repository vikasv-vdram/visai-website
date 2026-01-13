import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "VISAI Tax & Accounting Professionals",
  description:
    "VISAI provides professional GST, income tax, accounting, ROC, and business compliance services for Indian businesses and taxpayers.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-white text-gray-900"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
