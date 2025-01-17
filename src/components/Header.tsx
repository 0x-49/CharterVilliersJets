import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/LogoVilliers1.png"
            alt="Villiers Jets Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/products" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Aircraft
          </Link>
          <Link href="/blog" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Blog
          </Link>
          <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex">
            Empty Legs
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;