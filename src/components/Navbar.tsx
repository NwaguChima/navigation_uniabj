'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  console.log('pathname===>>', pathname);

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="gap-2 flex items-center">
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
              'hover:border-b border-green-500 transition-all duration-200',
              pathname === '/' ? 'border-b border-green-500 text-green-500' : ''
            )}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={cn(
              'hover:border-b border-green-500 transition-all duration-200',
              pathname === '/about'
                ? 'border-b border-green-500 text-green-500'
                : ''
            )}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={cn(
              'hover:border-b border-green-500 transition-all duration-200',
              pathname === '/contact-us'
                ? 'border-b border-green-500 text-green-500'
                : ''
            )}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li
            className={cn(
              'hover:border-b border-green-500 transition-all duration-200',
              pathname === '/map'
                ? 'border-b border-green-500 text-green-500'
                : ''
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
