import React from 'react';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter, X } from 'lucide-react';
import XLogo from '@/components/ui/x-logo';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import AxioSecondLogo from './ui/axio-second-logo';


const CompanyFooter = () => {

    return (
        <footer className="w-full text-[#1a1a1a] font-sans">
            {/* Top Call to Action */}
            <div className="flex flex-col mb-40 items-center pt-12 md:pt-20 pb-8 md:pb-0">

                <motion.h1 
               initial={{ opacity: 0.5, color: "#666" }}
               whileInView={{ opacity: 1, color: "#111" }}
               transition={{ duration: 1.5 }}
               className="text-[8rem] mb-10 md:text-[5.5rem] lg:text-[8rem] font-serif leading-[0.95] tracking-tight relative text-center"
            >
              	Let’s build
            </motion.h1>

                <Button
                  onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqstSrwfnHxxKmbfbsFPlTdkzBvMlGQJgwBlzmtJWHKcpnBxQLzlXFtshklbvsZHZmBJq', '_blank')}
                  className="rounded-full px-8 py-10 bg-white text-2xl text-black font-semibold shadow-lg hover:shadow-xl hover:bg-white/90 transition-all border border-black/5"
                    >
                  <span className="flex items-center gap-3">
                    Become a customer
                    <ArrowRight style={{ width: '26px', height: '26px' }} className='-rotate-40' />
                  </span>
               </Button>
            </div>

            {/* Sunset Stripes */}
            <div className="w-full flex flex-col">
                <div className="border-b w-full bg-black"></div>
            </div>

            {/* Main Content */}
            <div className="px-4 md:px-8 py-12 md:py-20 max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 md:col-span-6 flex flex-col gap-6">
                        <AxioSecondLogo className="w-20 md:w-21 h-6 md:h-7" />
                        <div className="flex gap-4 mt-4">
                        </div>
                    </div>

                    {/* Build */}
                    <div className="sm:col-span-1 md:col-span-2 ">
                        <h3 className="text-black font-medium mb-4 md:mb-6 text-sm md:text-base">The Cool</h3>
                        <ul className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-black/70">
                            <li><a href="/" className="hover:text-black transition-colors">About us</a></li>
                            <li><a href="https://x.com/merlinLabsAI" className="hover:text-black transition-colors">News</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="sm:col-span-1 md:col-span-2">
                        <h3 className="text-black font-medium mb-4 md:mb-6 text-sm md:text-base">The Boring</h3>
                        <ul className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-black/70">
                            <li><a href="#" className="hover:text-black transition-colors">Terms of service</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-20 pt-6 md:pt-8 border-t border-black/5 gap-4">
                    <div className="text-xs md:text-sm text-black/50">
                        AxioLabs © 2026
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://x.com/merlinLabsAI">
                        <XLogo className="w-4 md:w-5 h-4 md:h-5 text-black hover:opacity-70 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CompanyFooter;