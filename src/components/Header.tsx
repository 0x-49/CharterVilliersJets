import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-gradient-to-b from-gray-50 to-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-50/95">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="relative flex items-center hover:scale-[1.02] transition-transform duration-200 active:scale-95"
          aria-label="Villiers Jets Home"
        >
          <Image
            src="/images/LogoVilliers1.png"
            alt="Villiers Jets - Luxury Private Jet Charter Services | Global Aircraft Fleet"
            width={240}
            height={52}
            className="h-10 w-40 md:h-12 md:w-56 lg:h-14 lg:w-64"
            priority
            sizes="(max-width: 768px) 160px, 224px"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-[0.9375rem] font-medium tracking-tight">
          {[
            { href: '/about', label: 'About' },
            { href: '/products', label: 'Aircraft' },
            { href: '/blog', label: 'Insights' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-600 hover:text-gray-900 px-2.5 py-1.5 rounded-lg transition-all duration-200
                     before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300
                     hover:before:w-4/5 hover:before:left-[10%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-current={typeof window !== 'undefined' && window.location.pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Menu className="h-7 w-7 text-gray-700" />
            <span className="sr-only">Toggle navigation menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm">
            <div className="flex flex-col h-full pb-8">
              <div className="flex-1 space-y-6 pt-8">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/products', label: 'Aircraft' },
                  { href: '/blog', label: 'Insights' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 
                             transition-colors duration-200 group"
                  >
                    <span className="relative before:absolute before:-left-2 before:top-1/2 before:w-1 before:h-1 
                                   before:bg-transparent before:rounded-full before:transition-all before:duration-300
                                   group-hover:before:bg-primary group-hover:before:-left-1">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t pt-6 px-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50/50"
                >
                  Empty Legs
                </Button>
                <Button
                  className="w-full h-12 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white 
                           hover:shadow-md transition-shadow duration-200"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 px-6 rounded-lg bg-transparent border-gray-300 hover:bg-gray-50/50 hover:border-gray-400 
                     transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            View Empty Legs
          </Button>
          <Button
            className="h-10 px-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 hover:to-[#2563eb] text-white shadow-sm 
                     hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:saturate-125"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
