import "./globals.css";
import Navbar from "../components/Navbar";
import Companies from "@/sections/Companies";
import Footer from "@/sections/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> 
      </body>
    </html>
  );
}