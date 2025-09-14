"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Companies() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const setupAnimation = () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            onUpdate: self => console.log("progress:", self.progress.toFixed(3)), 
            invalidateOnRefresh: true,
          },
        }
      );
      return pin;
    };

  
    const handleRefresh = () => {
        ScrollTrigger.refresh();
    };
    
    
    window.addEventListener("load", handleRefresh);

    const pinAnimation = setupAnimation();

   
    return () => {
      pinAnimation.kill();
      window.removeEventListener("load", handleRefresh);
    };
  }, []);


  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div>
            <h1 className="text-5xl uppercase mt-70 ml-10 font-bold text-white">Top Companies Visiting Our Campus</h1>
          </div>
          <div className="scroll-section">
            <img className="w-[40vw] h-[20vw]" src="/images/company_img/airtel.png" alt="airtel" />
          </div>
          <div className="scroll-section">
            <img className="w-[50vw] h-[30vw]" src="/images/company_img/capgemini.png" alt="capgemini" />
          </div>
          <div className="scroll-section">
            <img className="w-[40vw] h-[10vw]" src="/images/company_img/cognizant.png" alt="cognizant" />
          </div>
          <div className="scroll-section">
            <img className="w-[30vw] h-[10vw]" src="/images/company_img/infosys.png" alt="infosys" />
          </div>
          <div className="scroll-section">
            <img className="w-[20vw] h-[10vw]" src="/images/company_img/tcs.png" alt="tcs" />
          </div>
          <div className="scroll-section">
            <img className="w-[30vw] h-[20vw]" src="/images/company_img/wipro.png" alt="wipro" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;