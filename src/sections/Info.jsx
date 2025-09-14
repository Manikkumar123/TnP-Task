"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const MessageSection = () => {
    useEffect(() => {
        const firstSplitText = new SplitText(".first-message", { type: "words" });
        const secondTextSplit = new SplitText(".second-message", { type: "words" });
        const paraTextSplit = new SplitText(".message-content p", { type: "words, lines", linesClass: "paragraph-line" });

        gsap.to(firstSplitText.words, {
            color: "#C89C6E",
            ease: "power1.in",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "-50% 50%",
                end: "bottom 5%",
                scrub: true,
            }
        });

        gsap.to(secondTextSplit.words, {
            color: "#C89C6E",
            ease: "power1.in",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "-40% 80%",
                end: "bottom 20%",
                scrub: true,
            }
        });

        gsap.to(paraTextSplit.words, {
            color: "#C89C6E",
            ease: "power1.in",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".message-content",
                start: "center 80%",
                end: "bottom 20%",
                scrub: true,
            }
        });
    }, []);

    return (
        <>
        <section className='message-content bg-[#7f3b2d] text-milk min-h-dvh overflow-hidden flex justify-center items-center relative z-20 -top-2 rounded-t-4xl'>
            <div className='container mx-auto flex-center py-15 relative'>
                <div className='w-full h-full'>
                    <div className='2xl:text-[5rem] md:text-6xl text-5xl font-bold uppercase leading-[5.5vw] tracking-[-.25vw] flex flex-col justify-center items-center md:gap-10 gap-14'>
                        <h1 className='first-message 2xl:max-w-4xl md:max-w-2xl max-w-xs text-center text-[#faeade10]'>
                           Welcome to the T&P Cell
                        </h1>
                        <div className=' rotate-[-3deg] 2xl:translate-y-7 -translate-y-5 absolute z-10 border-[.5vw] border-[#523122] bg-[#faeade] top-60'>
                            <div className='bg-[#e3a458] text-[#7f3b2d] md:pb-1 pb-3 px-5'>
                                <h2 className='second-message text-red-brown'>
                                     GNDEC
                                </h2>
                            </div>
                        </div>
                        <h1 className='first-message 2xl:max-w-7xl md:max-w-4xl max-w-xs text-center text-[#faeade10] mt-[6vw]'>
                                                        Informative platform for

GNDEC students, staff & more.
                        </h1>
                    </div>
                    <div className='flex-center md:mt-20 mt-10 flex justify-center text-[#faeade]'>
                        <div className='max-w-xl px-10 flex-center overflow-hidden'>
                            <p className='text-center font-paragraph text-[1.4vw]'>
                                The goal of Training & Placement Cell is to provide students with a platform for using their potential to gain valuable experience by working in industry."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default MessageSection;
