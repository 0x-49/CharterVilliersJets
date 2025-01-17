import React from "react";
import Head from "next/head";
import Image from "next/image";
import SEO from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Villiers Jets",
  "url": "https://villiersjets.com",
  "logo": "https://villiersjets.com/images/LogoVilliers1.png",
  "description": "Experience unparalleled luxury with Villiers Jets. Private jet charters, empty leg flights, and premium aviation services tailored to discerning travelers.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "London",
    "postalCode": "SW6 3PA",
    "addressCountry": "UK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44(0)20 8163 6578",
    "contactType": "customer service"
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
              <Badge className="mb-8 py-3 px-8 text-xl bg-gold/90 text-navy font-semibold tracking-wide">
                ✈️ Premier Private Aviation
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-white">
                Elevate Your Journey with<br />
                <span className="text-gold">Villiers Jets</span>
              </h1>
              
              <p className="text-white text-xl md:text-3xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                Experience the pinnacle of private aviation. Tailored charter solutions, 
                <span className="text-gold font-semibold"> exclusive empty leg opportunities</span>, and
                unparalleled service excellence.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto text-xl px-10 py-7 bg-gold hover:bg-gold/90 text-navy font-semibold transition-all duration-300 hover:scale-105"
                >
                  Request Charter Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full md:w-auto text-xl px-10 py-7 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold transition-all duration-300 hover:scale-105"
                >
                  View Empty Legs
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-lg font-medium">Our Services</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-brand to-navy bg-clip-text text-transparent">
                Luxury Aviation Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive range of premium services designed for the most discerning travelers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Private Charter",
                  icon: "✈️",
                  description: "Bespoke private jet solutions tailored to your schedule and preferences",
                  features: ["24/7 Global Availability", "Personalized Service", "Luxury Amenities"],
                  gradient: "from-gold to-brand"
                },
                {
                  title: "Empty Leg Flights",
                  icon: "🌟",
                  description: "Exclusive deals on premium empty leg flights at preferential rates",
                  features: ["Significant Savings", "Luxury Experience", "Flexible Booking"],
                  gradient: "from-brand to-navy"
                },
                {
                  title: "Group Charter",
                  icon: "👥",
                  description: "Specialized solutions for corporate groups and large parties",
                  features: ["Custom Configuration", "Event Planning", "Corporate Packages"],
                  gradient: "from-navy to-gold"
                }
              ].map((service, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <Card className="relative overflow-hidden transition-all duration-300 hover:scale-105">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}></div>
                      <CardHeader>
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-gold">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline">Learn More</Button>
                      </CardFooter>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Click to explore our {service.title.toLowerCase()} services and discover how we can enhance your travel experience.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>

        {/* Aircraft Fleet Section */}
        <section className="py-24 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-lg font-medium">Our Fleet</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-brand to-navy bg-clip-text text-transparent">
                Premium Aircraft Selection
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose from our diverse fleet of meticulously maintained private jets
              </p>
            </div>

            <Tabs defaultValue="light" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="light">Light Jets</TabsTrigger>
                <TabsTrigger value="midsize">Midsize Jets</TabsTrigger>
                <TabsTrigger value="heavy">Heavy Jets</TabsTrigger>
              </TabsList>

              <ScrollArea className="h-[600px] rounded-md border p-4">
                <TabsContent value="light">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((_, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader>
                          <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/images/light-jet.jpg"
                              alt="Light Private Jet"
                              layout="fill"
                              objectFit="cover"
                              className="transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <CardTitle className="text-2xl">Phenom 300</CardTitle>
                          <CardDescription className="text-lg">
                            Advanced light jet with exceptional performance
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Range</TableCell>
                                <TableCell>2,000 nm</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Passengers</TableCell>
                                <TableCell>8</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Cruise Speed</TableCell>
                                <TableCell>495 mph</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">View Details</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="midsize">
                  {/* Similar content for midsize jets */}
                </TabsContent>
                
                <TabsContent value="heavy">
                  {/* Similar content for heavy jets */}
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-luxury.png')] bg-repeat opacity-10 animate-pulse-hover"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-8 border-gold text-gold">
                Ready for Takeoff?
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Begin Your <span className="text-gold">Premium Journey</span>
              </h2>
              <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
                Experience the difference of flying with Villiers Jets. 
                Our aviation experts are ready to craft your perfect journey.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy text-xl px-10 py-7 transition-all duration-300 hover:scale-105"
                >
                  Request Quote
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy text-xl px-10 py-7 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </div>
              <p className="mt-8 text-white/60">
                Or call us directly: <span className="text-gold font-semibold">+1 (800) 555-JETS</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
