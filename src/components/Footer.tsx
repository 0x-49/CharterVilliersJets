import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/images/LogoVilliers1.png"
                alt="Villiers Jets Logo"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-sky-blue/80">
              Founded in 2013, Villiers Jets simplifies access to private jet charter with over 10,000 aircraft spanning 40,000 destinations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Aircraft Charter
                </Link>
              </li>
              <li>
                <Link href="/empty-legs" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Empty Legs
                </Link>
              </li>
              <li>
                <Link href="/group-charter" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Group Charter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sky-blue/80 hover:text-gold transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sky-blue/20">
          <div className="text-center text-sm text-sky-blue/80">
            <p> {new Date().getFullYear()} Villiers Jets. All rights reserved.</p>
            <p className="mt-2">
              Villiers is a charter broker and arranges carriage by air utilizing aircraft from third-party aircraft operators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
