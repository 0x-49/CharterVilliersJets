import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Villiers Jets",
  "url": "https://villiersjets.com",
  "logo": "/images/LogoVilliers1.png",
  "description": "Experience unparalleled luxury with Villiers Jets. Private jet charters, empty leg flights, and premium aviation services tailored to discerning travelers.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hangar 7, Imperial Wharf",
    "addressLocality": "London",
    "postalCode": "SW6 3PA",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44(0)20 8163 6578",
    "contactType": "customer service",
    "areaServed": ["GB", "US", "EU"],
    "availableLanguage": ["English", "French"]
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Villiers Jets - Private Aviation Excellence | Charter & Empty Leg Flights</title>
        <meta name="description" content="Experience unparalleled luxury with Villiers Jets. Private jet charters, empty leg flights, and premium aviation services tailored to discerning travelers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
          <div className="absolute inset-0 bg-[url('/images/pattern-luxury.png')] bg-repeat opacity-10 animate-pulse-hover"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy to-navy/90"></div>
          
          <div className="relative container mx-auto px-4 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-8 py-2 px-6 text-lg md:text-xl bg-gold/90 text-navy font-semibold tracking-wide shadow-sm">
                ✈️ Premier Private Aviation
              </Badge>
              
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 text-white">
                Elevate Your Journey with<br />
                <span className="text-gold bg-clip-text bg-gradient-to-r from-gold-400 to-gold-700">
                  Villiers Jets
                </span>
              </h1>
              
              <div className="relative group">
                <p className="text-white text-lg md:text-3xl max-w-3xl mx-auto mb-12 leading-relaxed font-light transition-transform duration-300 group-hover:scale-102">
                  Experience the pinnacle of private aviation. Tailored charter solutions,{" "}
                  <span className="text-gold font-semibold underline decoration-2 underline-offset-4">
                    exclusive empty leg opportunities
                  </span>, and unparalleled service excellence.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                <div className="relative overflow-hidden rounded-lg">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto text-xl px-8 py-6 bg-gold hover:bg-gold/90 text-navy font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <span className="relative z-10">Request Charter Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full md:w-auto text-xl px-10 py-7 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">View Empty Legs</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <Button
                    size="lg"
                    className="w-full md:w-auto text-xl px-10 py-7 bg-bitcoin text-navy font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Pay with Bitcoin</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-bitcoin/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
