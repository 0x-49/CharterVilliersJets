import React from "react";
import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/types/product';

// This would normally come from an API
const mockProduct = {
  id: 'example-product',
  title: 'Premium Wireless Headphones',
  description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
  price: 199.99,
  category: 'electronics',
  image: '/images/rect.png',
  rating: 4.5,
  reviews: 128,
  affiliateLink: 'https://example.com/affiliate',
  features: [
    'Active Noise Cancellation',
    '30-hour battery life',
    'Premium sound quality',
    'Comfortable fit',
    'Voice assistant support'
  ],
  specifications: {
    'Battery Life': '30 hours',
    'Bluetooth Version': '5.0',
    'Weight': '250g',
    'Charging Time': '2 hours',
    'Warranty': '1 year'
  }
};

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('overview');

  // In a real app, we would fetch the product data here
  const product = mockProduct;

  return (
    <>
      <Head>
        <title>{product.title} | AffiliStore</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <main className="flex-1 py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Product Image */}
              <div className="relative aspect-square bg-secondary/20 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-3xl font-bold">${product.price}</p>
                </div>

                <Button size="lg" className="w-full" onClick={() => window.open(product.affiliateLink, '_blank')}>
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Product Details Tabs */}
            <Card>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>
                <CardContent className="pt-6">
                  <TabsContent value="overview">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Key Features</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="specifications">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Technical Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b">
                            <span className="font-medium">{key}</span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
