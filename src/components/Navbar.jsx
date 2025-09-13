"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const text = headingRef.current.innerText;
      headingRef.current.innerHTML = text
        .split("")
        .map((char) =>
          char === " "
            ? `<span class="inline-block w-2"></span>`
            : `<span class="inline-block opacity-0 translate-y-5 transition-all">${char}</span>`
        )
        .join("");
    }

    const tl = gsap.timeline();

    tl.fromTo(
      ".navbar",
      { y: -80, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" }
    );

    tl.to(
      ".nav_info a",
      { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power2.out" },
      "-=0.2"
    );

    gsap.to(".heading span", {
      y: 0,
      autoAlpha: 1,
      duration: 0.25,
      stagger: 0.03,
      ease: "back.out(1.7)",
      delay: 0.4,
    });

    gsap.to(["nav", ".navbar"], {
      top: 0,
      left: 0,
      xPercent: 0,
      marginTop: 0,
      width: "100vw",
      borderRadius: 0,
      borderWidth: 0,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top+=20 top",
        end: "top+=100 top",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <nav className="fixed top-3 z-50 w-full transition-all">
        <div className="navbar h-[5.5vw] w-[90vw] mx-auto rounded-3xl bg-white/30 backdrop-blur border border-white/20">
          <div className="container flex justify-between items-center h-full px-5">
            <div className="img_container flex items-center gap-6 text-black uppercase">
              <img className="h-[4.5vw] rounded-full" src="/images/logo.png" alt="logo" />
              <h2 ref={headingRef} className="font-bold text-blue-500 text-3xl heading">
                Training & Placement Cell
              </h2>
            </div>
            <div className="nav_info flex gap-10 text-[1.5vw] font-semibold text-mid-brown">
              <a className="opacity-0 translate-y-2 hover:underline hover:text-gray-900 transition-all" href="#">Home</a>
              <a className="opacity-0 translate-y-2 hover:underline hover:text-gray-900 transition-all" href="#">About</a>
              <a className="opacity-0 translate-y-2 hover:underline hover:text-gray-900 transition-all" href="#">Search</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-[200vh] w-full mt-[6vw] px-[5vw]"></div>
    </>
  );
}
