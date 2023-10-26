import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-[10] h-24 border-b border-zinc-300 bg-green-400 px-4 py-2 md:px-12">
      <ul className="mx-auto mb-4 flex items-center justify-between gap-4">
        <li className="text-gray-100 transition-all duration-200 hover:text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-gray-100 transition-all duration-200 hover:text-white">
          <Link href="/about">About</Link>
        </li>
        <li className="text-gray-100 transition-all duration-200 hover:text-white">
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className="text-gray-100 transition-all duration-200 hover:text-white">
          <Link href="/map">Map</Link>
        </li>
      </ul>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/ekene.nwankwo.79656?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="w-5 text-gray-100" />
          </a>
          <a
            href="https://x.com/ThisEmmawell?t=bvIf805Pa9UUluLUtK0KqQ&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <XIcon className="w-5 text-gray-100" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-nwankwo-64596724a"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="w-5 text-gray-100" />
          </a>
          <a
            href="https://instagram.com/ekenziemonie?igshid=ZGUzMzM3NWJiOQ=="
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="w-5 text-gray-100" />
          </a>
        </div>
        <p className="text-center text-gray-100">
          &copy; {new Date().getFullYear()} University of Abuja
        </p>
      </div>
    </footer>
  );
};

export default Footer;
