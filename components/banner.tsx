"use client";

import { Fade, AttentionSeeker } from "react-awesome-reveal";
import Section from "./ui/section";
import Image from "next/image";

const Banner = () => {
    return (
        <Section id="home">
            <div className="w-full flex flex-col lg:flex-row justify-end relative">
                {/* Left Side: Name and Title */}
                <div className="absolute top-20 left-6 lg:top-60 lg:left-10 z-40">
                    {/* Name Animation */}
                    <Fade direction="up" duration={1200} triggerOnce>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight font-italiana">
                            Hugo Stiglitz
                        </h1>
                    </Fade>
                    {/* Title Animation */}
                    <Fade direction="up" delay={300} duration={1200} triggerOnce>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl mt-4 lg:mt-8 text-gray-600">
                            Full Stack Developer
                        </p>
                    </Fade>
                </div>

                {/* Right Side: Banner Image */}
                <div className="relative w-full lg:w-auto">
                        <Image
                            src="/banner.png"
                            alt="banner"
                            width={900}
                            height={400}
                            className="w-full lg:min-w-[773px] lg:w-auto object-cover"
                            priority
                        />

                    {/* Clickable Resume Icon with Animation */}
                    <AttentionSeeker effect="flash" delay={1000}>
                        <a
                            href="/resume.pdf"
                            download="Hugo_Stiglitz_CV"
                            className="absolute bottom-0 left-0 pt-4 pr-4 ps-0 pb-0 bg-white transition-all duration-300 hover:pt-5 hover:pr-5"
                        >
                            <Image
                                src="/cv-btn.png"
                                alt="Download Resume"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </a>
                    </AttentionSeeker>
                </div>
            </div>
        </Section>
    );
};

export default Banner;