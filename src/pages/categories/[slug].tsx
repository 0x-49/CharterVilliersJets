import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import { PRODUCT_CATEGORIES } from '@/types/product';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const category = PRODUCT_CATEGORIES.find(cat => cat.slug === slug);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container py-12">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <p>The requested category does not exist.</p>
        </main>
      </div>
    );
  }

  // Temporary mock products for the category
  const mockProducts = Array(6).fill(null).map((_, index) => ({
    id: `${category.id}-${index}`,
    title: `${category.title} Product ${index + 1}`,
    description: 'High-quality product with amazing features',
    price: 199.99,
    image: '/images/rect.png'
  }));

  return (
    <>
      <Head>
        <title>{category.title} - AffiliStore</title>
        <meta name="description" content={category.description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
              <p className="text-muted-foreground text-lg">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts.map((product) => (
                <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="aspect-video bg-secondary/20 rounded-lg mb-4"></div>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold mb-4">${product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full"
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}