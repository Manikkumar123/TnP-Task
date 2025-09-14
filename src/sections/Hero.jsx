"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Info from "./Info";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const scrollDivRef = useRef(null);

  useEffect(() => {
    if (heroRef.current && overlayRef.current && scrollDivRef.current) {
      // Hero image scroll animation
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

      // Overlay fade animation
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

      // Immediate clip-path reveal animation for "Scroll to Explore"
      gsap.to(scrollDivRef.current, {
        duration: 1.2,
        ease: "power2.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        immediateRender: true,
      });
    }
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div
          ref={scrollDivRef}
          className="absolute top-[30vw] left-[28vw] px-10 z-50 bg-[#7F3B2D] border-amber-200 border-2 rounded-md scroll-reveal"
        >
          <h1 className="text-[4vw] font-bold uppercase font-[font1] text-white cursor-pointer">
            Scroll to Explore
          </h1>
        </div>

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
