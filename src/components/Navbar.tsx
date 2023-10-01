"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            width={32}
            height={32}
            alt="Uni-Abuja Logo"
          />
        </Link>
        <ul className="flex items-center gap-4">
          <li
            className={cn(
              "border-green-500 transition-all duration-200 hover:border-b",
              pathname === "/"
                ? "border-b border-green-500 text-green-500"
                : "",
            )}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={cn(
              "border-green-500 transition-all duration-200 hover:border-b",
              pathname === "/about"
                ? "border-b border-green-500 text-green-500"
                : "",
            )}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={cn(
              "border-green-500 transition-all duration-200 hover:border-b",
              pathname === "/contact-us"
                ? "border-b border-green-500 text-green-500"
                : "",
            )}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li
            className={cn(
              "border-green-500 transition-all duration-200 hover:border-b",
              pathname === "/map"
                ? "border-b border-green-500 text-green-500"
                : "",
            )}
          >
            <Link href="/map">Map</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
