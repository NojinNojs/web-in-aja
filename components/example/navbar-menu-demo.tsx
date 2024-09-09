"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import ThemeSwitcherToggle from "../ThemeSwitcherToggle";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Navbar Wrapper */}
        <div className="flex justify-between items-center w-full">
          {/* Brand / Logo (Left) */}
          <Link href="/" className="block font-bold text-xl hover:opacity-75">
            WebInAja
          </Link>

          {/* Menu Items (Center) */}
          <div
            className={cn(
              "hidden md:flex md:items-center gap-8", // Centering items on larger screens
              isOpen ? "block" : "hidden" // Mobile view toggle
            )}
          >
            <Link href="/" className="hover:opacity-75">
              Home
            </Link>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-white text-sm">
                <HoveredLink href="/about">Who We Are</HoveredLink>
                <HoveredLink href="/team">Our Team</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-white text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/seo">SEO Optimization</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-white text-sm">
                <HoveredLink href="/contact">Contact Us</HoveredLink>
                <HoveredLink href="/support">Support</HoveredLink>
              </div>
            </MenuItem>
          </div>

          {/* Theme Switcher (Right) */}
          <div className="hidden md:block">
            <ThemeSwitcherToggle />
          </div>

          {/* Hamburger Menu Icon (Visible on Mobile) */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden p-4 bg-gray-800">
            <MenuItem setActive={setActive} active={active} item="Home">
              <Link href="/" className="block text-white p-4 hover:opacity-75">
                Home
              </Link>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/about" className="text-white">
                  Who We Are
                </HoveredLink>
                <HoveredLink href="/team" className="text-white">
                  Our Team
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev" className="text-white">
                  Web Development
                </HoveredLink>
                <HoveredLink href="/seo" className="text-white">
                  SEO Optimization
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/contact" className="text-white">
                  Contact Us
                </HoveredLink>
                <HoveredLink href="/support" className="text-white">
                  Support
                </HoveredLink>
              </div>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
