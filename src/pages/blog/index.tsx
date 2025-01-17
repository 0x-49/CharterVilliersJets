import React from "react";
import Head from "next/head";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - AffiliStore</title>
        <meta name="description" content="Latest articles and updates from AffiliStore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        
        <main className="flex-1 container py-12">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <Card key={post} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-secondary/20 rounded-lg mb-4"></div>
                  <CardTitle>Blog Post {post}</CardTitle>
                  <CardDescription>Posted on January {post}, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}