import React from "react";
import Head from "next/head";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "You can place an order by browsing our products, selecting the items you want, and proceeding to checkout. Follow the simple steps to complete your purchase.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and other secure payment methods. All transactions are processed through secure payment gateways.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on your location and the selected shipping method. Typically, orders are delivered within 3-7 business days.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Contact our customer service for return instructions.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see specific shipping options during checkout.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - AffiliStore</title>
        <meta name="description" content="Frequently Asked Questions about AffiliStore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        
        <main className="flex-1 container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Can't find what you're looking for?{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}