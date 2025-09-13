import "./globals.css";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
      </body>
    </html>
  );
}
