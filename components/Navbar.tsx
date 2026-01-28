"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import AxioLogo from "@/components/ui/axio-logo";
import { ChevronDown, ArrowRight, ScanFace, PanelLeftIcon, Radar, Route, Newspaper, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Waitlist } from "@clerk/nextjs";

interface NavbarProps {
    showBackButton?: boolean;
    onJoinUsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ showBackButton = false, onJoinUsClick }) => {
    const router = useRouter();
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutOpen, setAboutOpen] = useState(false);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };

    const [isArrowOpen, setIsArrowOpen] = useState(false);

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 150);
  };

    const handleProductsEnter = () => {
        if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
        setIsProductsOpen(true);
    };

    const handleProductsLeave = () => {
        productsTimeoutRef.current = setTimeout(() => {
            setIsProductsOpen(false);
        }, 150);
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 min-w-fit ml-10">
                        <a href="/">
                        <AxioLogo className="w-8 h-8 sm:w-10 sm:h-10" />
                        </a>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-3 flex-1 justify-left ml-8">
                        <div
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Popover open={isAboutOpen} onOpenChange={setAboutOpen}>
                <PopoverTrigger className="text-black hover:text-black/80 hover:bg-black/3 transition-colors duration-200 text-sm font-medium flex items-center gap-1 p-2 rounded-lg">
                  Company
                  <motion.div
                      animate={{ rotate: isAboutOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                  >
                      <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </PopoverTrigger>
                <PopoverContent
                  className="w-60 mt-5 bg-black border-none shadow-2xl p-5 rounded-2xl"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                >
                  <div className="flex flex-col gap-3">
                    <a href="/" className="flex items-center gap-3 text-black hover:text-black/80 transition-colors duration-200 text-sm font-medium p-2 rounded-lg">
                      <div className="mt-1">
                        <User className="w-7 h-7 text-white justify-center items-center" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-[16px] hover:text-white/80 transition-colors duration-200">About us</div>
                        <div className="text-xs text-white/80 mt-1">Our story and mission</div>
                      </div>
                    </a>

                    <a href="https://x.com/merlinLabsAI" className="flex items-center gap-3 text-black hover:text-black/80 transition-colors duration-200 text-sm font-medium p-2 rounded-lg">
                      <div className="mt-1">
                        <Newspaper className="w-7 h-7 text-white justify-center items-center" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-[16px] hover:text-white/80 transition-colors duration-200">News</div>
                        <div className="text-xs text-white/80 mt-1">Latest new and tips</div>
                      </div>
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

                    {/* Right Section */}
             <div className="flex items-center gap-3 sm:gap-x4 ml-auto">

                {isArrowOpen && (
    <div
      className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-3xl z-[999]"
      onClick={() => setIsArrowOpen(false)}
    />
  )}

  <Popover open={isArrowOpen} onOpenChange={setIsArrowOpen}>
    <PopoverTrigger>
      <Button className="flex items-center rounded-full px-4 py-6 bg-transparent text-lg text-black font-semibold shadow-lg hover:shadow-xl transition-all border border-black/5 hidden sm:flex sm:items-center ml-200 z-50">
        <span className="flex items-center gap-2">
          Join Us
          <ArrowRight
            style={{ width: '20px', height: '20px' }}
            className="-rotate-40"
          />
        </span>
      </Button>
    </PopoverTrigger>

    <PopoverContent className="relative items-center justify-center w-[435px] z-50 mr-80 mt-30">
      <Waitlist />
    </PopoverContent>
  </Popover>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-black hover:text-black/80 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-black/10 space-y-3">
                        <a href="/AI" className="block py-2 px-3 text-sm font-medium text-black hover:bg-black/5 rounded-lg transition-colors">
                            Agents
                        </a>
                        <a href="/Automation" className="block py-2 px-3 text-sm font-medium text-black hover:bg-black/5 rounded-lg transition-colors">
                            Templates
                        </a>
                        <a href="/Camera" className="block py-2 px-3 text-sm font-medium text-black hover:bg-black/5 rounded-lg transition-colors">
                            For Devices
                        </a>
                        <a href="/Integration" className="block py-2 px-3 text-sm font-medium text-black hover:bg-black/5 rounded-lg transition-colors">
                            Integration
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;