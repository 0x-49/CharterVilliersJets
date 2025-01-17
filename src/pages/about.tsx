import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - AffiliStore</title>
        <meta name="description" content="Learn more about AffiliStore - your trusted source for premium products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About AffiliStore
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Your trusted source for premium products and exceptional customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  At AffiliStore, we're committed to bringing you the finest selection of premium products 
                  that enhance your lifestyle. Our mission is to make quality accessible while providing 
                  an exceptional shopping experience.
                </p>
                <Button size="lg" className="rounded-full">
                  View Our Products
                </Button>
              </div>
              <div className="aspect-video bg-secondary/20 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center text-white mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0">
                  <CardContent className="pt-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary/20 mx-auto mb-4"></div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover our curated collection of premium products today.
            </p>
            <Button size="lg" className="rounded-full">
              Browse Collection
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

const values = [
  {
    icon: "★",
    title: "Quality First",
    description: "We carefully select only the highest quality products for our customers.",
  },
  {
    icon: "♥",
    title: "Customer Focus",
    description: "Your satisfaction is our top priority. We're here to help every step of the way.",
  },
  {
    icon: "✓",
    title: "Transparency",
    description: "We believe in honest, clear communication and fair pricing.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Products",
  },
  {
    name: "Michael Brown",
    role: "Customer Success",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
  },
];