"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, MenuItem, Menu } from "../ui/navbar-menu"; // Import Menu & MenuItem
import { cn } from "@/lib/utils";
import ThemeSwitcherToggle from "../ThemeSwitcherToggle";
import { usePathname } from "next/navigation"; // To check the active path

// Props interface untuk Navbar
interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  pathname: string;
  active: string | null;
  setActive: (item: string | null) => void;
}

export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false); // State untuk drawer
  const pathname = usePathname(); // Mendapatkan path saat ini untuk menyorot link yang aktif
  const [active, setActive] = useState<string | null>(null); // State for MenuItem hover

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pathname={pathname}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

function Navbar({
  isOpen,
  setIsOpen,
  pathname,
  active,
  setActive,
}: NavbarProps) {
  return (
    <div className="drawer drawer-end fixed top-5 inset-x-0 max-w-7xl mx-auto z-50">
      {/* Toggle checkbox untuk drawer */}
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      {/* Konten Navbar */}
      <Menu setActive={setActive}>
        <div className="drawer-content flex flex-col w-full">
          <div className="flex justify-between items-center w-full px-4">
            {/* Brand / Logo (Sebelah kiri) */}
            <div className="font-bold text-xl">
              <Link
                href="/"
                className="hover:opacity-75"
                onClick={() => setActive(null)}
              >
                WebInAja
              </Link>
            </div>

            {/* Menu Items (Tengah - Tampil di Desktop) */}
            <div className="hidden md:flex md:items-center gap-8 justify-center flex-grow">
              <Link
                href="/"
                className={cn(
                  "hover:opacity-75",
                  pathname === "/" ? "text-primary font-bold" : ""
                )}
                onClick={() => setActive(null)}
              >
                Home
              </Link>
              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about" onClick={() => setActive(null)}>
                    Who We Are
                  </HoveredLink>
                  <HoveredLink href="/team" onClick={() => setActive(null)}>
                    Our Team
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev" onClick={() => setActive(null)}>
                    Web Development
                  </HoveredLink>
                  <HoveredLink href="/seo" onClick={() => setActive(null)}>
                    SEO Optimization
                  </HoveredLink>
                </div>
              </MenuItem>
              <Link
                href="/contact"
                className={cn(
                  "hover:opacity-75",
                  pathname === "/contact" ? "text-primary font-bold" : ""
                )}
                onClick={() => setActive(null)}
              >
                Contact Us
              </Link>
            </div>

            {/* Theme Switcher (Tampil di Desktop) */}
            <div className="hidden md:block">
              <ThemeSwitcherToggle />
            </div>

            {/* Tombol Hamburger (Tampil di Mobile hingga 767px) */}
            <div className="md:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </Menu>

      {/* Drawer (Sidebar untuk Mobile) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="backdrop-filter backdrop-blur-lg bg-white/70 dark:bg-black/70 border border-gray-200 dark:border-white/10 min-h-full w-80 p-4">
          {/* Tombol close di dalam drawer */}
          <button
            aria-label="close sidebar"
            className="absolute top-4 right-4 focus:outline-none"
            onClick={() => setIsOpen(false)}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Menu Sidebar */}
          <ul className="menu text-base-content space-y-6">
            <li>
              <Link
                href="/"
                className={cn(
                  "hover:opacity-75",
                  pathname === "/" ? "text-primary font-bold" : ""
                )}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <details open>
                <summary className="hover:opacity-75 text-black dark:text-white">
                  About Us
                </summary>
                <ul className="pl-4">
                  <li>
                    <HoveredLink href="/about" onClick={() => setIsOpen(false)}>
                      Who We Are
                    </HoveredLink>
                  </li>
                  <li>
                    <HoveredLink href="/team" onClick={() => setIsOpen(false)}>
                      Our Team
                    </HoveredLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="hover:opacity-75 text-black dark:text-white">
                  Services
                </summary>
                <ul className="pl-4">
                  <li>
                    <HoveredLink
                      href="/web-dev"
                      onClick={() => setIsOpen(false)}
                    >
                      Web Development
                    </HoveredLink>
                  </li>
                  <li>
                    <HoveredLink href="/seo" onClick={() => setIsOpen(false)}>
                      SEO Optimization
                    </HoveredLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <HoveredLink
                href="/contact"
                className={cn(
                  "hover:opacity-75",
                  pathname === "/contact" ? "text-primary font-bold" : ""
                )}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </HoveredLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
