"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Info from "./Info";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (heroRef.current && overlayRef.current) {
 
      gsap.to(heroRef.current, {
        scale: 0.95,
        rotate: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      
      gsap.to(overlayRef.current, {
        opacity: 0.6, 
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">

      <img
        ref={heroRef}
        className="h-full w-full object-cover"
        src="/images/hero-img.jpg"
        alt="Hero background"
      />


      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
      />
    </section>
    <Info />
    </>
  );
};

export default Hero;
