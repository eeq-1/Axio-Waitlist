"use client";

import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import StartupTimeline from "@/components/ui/startup-timeline";
import Navbar from "@/components/Navbar";
import CompanyFooter from '@/components/CompanyFooter';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const HighlightSpan = ({ children, delay = 0.2 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <span className="relative inline-block z-0">
      <span className="relative z-10 font-medium">{children}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9], delay }}
        className="absolute inset-0 bg-[#F9E188] -z-10 origin-left -rotate-1 scale-y-110 rounded-sm mix-blend-multiply"
      />
    </span>
  );
};


interface ScrollRevealProps extends HTMLMotionProps<"p"> {
  children: React.ReactNode;
  delay?: number;
}

const ScrollRevealText = ({ children, className, delay = 0, ...props }: ScrollRevealProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30, color: "#a1a1aa" }} 
      whileInView={{ opacity: 1, y: 0, color: "#1A1A1A" }} 
      viewport={{ once: true, margin: "-25% 0px -25% 0px" }} 
      transition={{ 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1], 
        color: { duration: 1.2 }, 
        delay
      }}
      className={cn("leading-tight font-medium font-inter text-xl md:text-2xl", className)}
      {...props}
    >
      {children}
    </motion.p>
  );
};


const FadeIn = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function WabiHome() {

  return (
    <div className="relative min-h-screen selection:bg-[#E2E2D3] selection:text-black overflow-x-hidden pt-20">
      
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-plus-darker bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navbar showBackButton={true} />

      <main className="max-w-[1000px] mx-auto px-6 pt-32 pb-32 flex flex-col">


        <section className="mb-32 md:mb-48 mt-15 items-center justify-center relative">
          <FadeIn>

            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-500 shadow-sm">
                <span className="relative justify-center items-center flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Announcing Axio soon
              </div>
            </div>
            
            <motion.h1 
               initial={{ opacity: 0.5, color: "#666" }}
               whileInView={{ opacity: 1, color: "#111" }}
               transition={{ duration: 1.5 }}
               className="text-[8rem] md:text-[5.5rem] lg:text-[8rem] font-serif leading-[0.95] tracking-tight relative text-center"
            >
              	Work smarter<br />
              <span className="italic font-light text-black/90 items-center relative">
                <HighlightSpan delay={0.5}> not harder </HighlightSpan>
              </span>
            </motion.h1>
          </FadeIn>

          <section className="relative text-left align-left mx-auto max-w-2xl mt-30">
            <div className="space-y-24">
        
              <FadeIn className="text-left" delay={0.2}>
                <h1 className='text-5xl pb-20 font-medium tracking-tighter'>The startups story</h1>
<span className='text-left text-2xl font-medium'>Startups are born from a simple idea:
there is a better way to build, to work, to move forward.
Each generation pushes technology further,
reshaping how people create, collaborate, and grow.</span>
              </FadeIn >

            <motion.div
               initial={{ opacity: 0.5, color: "#666" }}
               whileInView={{ opacity: 1, color: "#111" }}
               transition={{ duration: 1.5 }}
               className="items-center relative justify-center text-3xl"
            >
              <StartupTimeline className=''/>
            </motion.div>
              

              <ScrollRevealText className="text-left">
We were told software would make work easier. And for a while, it did. Spreadsheets, dashboards, CRMs, automations stacked on automations. Yet somehow, <HighlightSpan>work became heavier.</HighlightSpan> More tabs. More clicks. More rules. More tools asking humans to adapt to software — instead of the other way around.
              </ScrollRevealText>
              
               <ScrollRevealText className="text-left">
Work isn’t average. Teams aren’t identical. No two businesses think, decide, or move the same way. So why should their software?
               </ScrollRevealText>

               <ScrollRevealText className="text-left">
                We believe <HighlightSpan>automation shouldn’t be rigid.</HighlightSpan> It shouldn’t require endless configuration or a human babysitter. When software is built around your business, it’s freed from unnecessary complexity, from manual handoffs, from processes that exist only because “that’s how the tool works.”
              </ScrollRevealText>

               <ScrollRevealText className="text-left">
                That’s why we built <HighlightSpan>Axio</HighlightSpan>. An AI automation platform that learns how you work — your processes, your habits, your decisions — and adapts in real time. Not just workflows that run, but <HighlightSpan>systems that understand.</HighlightSpan> No templates. No brittle logic. No friction. Just automation that feels natural, because it was built for your business.
               </ScrollRevealText>

               <ScrollRevealText className="text-left">
                The most powerful systems aren’t predefined. They’re discovered. One day, we’ll look back at today’s software the way we look at spreadsheets: necessary once, limiting in hindsight. A new era of work is beginning, where humans focus on judgment, creativity, and vision — <HighlightSpan>and AI handles the rest.</HighlightSpan>
               </ScrollRevealText>

               <ScrollRevealText className="text-left">
                Software made <HighlightSpan>with you.</HighlightSpan> That works <HighlightSpan>for you.</HighlightSpan>
               </ScrollRevealText>

            </div>
          </section>
        </section>
      </main>
        <CompanyFooter></CompanyFooter>
    </div>
  );
}