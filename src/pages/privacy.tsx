import React from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - AffiliStore</title>
        <meta name="description" content="AffiliStore Privacy Policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        
        <main className="flex-1 container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us, including when you:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Create an account</li>
                  <li>Make a purchase</li>
                  <li>Sign up for our newsletter</li>
                  <li>Contact us for support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Process your orders and payments</li>
                  <li>Communicate with you about your orders</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell or rent your personal information to third parties. We may share your
                  information with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Service providers who assist in our operations</li>
                  <li>Law enforcement when required by law</li>
                  <li>Other parties with your consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our Privacy Policy, please{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    contact us
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}