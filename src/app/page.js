import Companies from "@/sections/Companies";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Posts from "@/sections/Posts";

export default function Home() {
  return (
    <>
      <Hero />
      <Posts />
      <Companies />
      <Footer />
    </>
  );
}