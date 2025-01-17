export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  affiliateLink: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "electronics",
    title: "Electronics",
    description: "Latest gadgets and tech accessories",
    slug: "electronics",
  },
  {
    id: "fashion",
    title: "Fashion",
    description: "Trendy clothing and accessories",
    slug: "fashion",
  },
  {
    id: "home-living",
    title: "Home & Living",
    description: "Furniture and home decor",
    slug: "home-living",
  },
  {
    id: "beauty",
    title: "Beauty",
    description: "Skincare and cosmetics",
    slug: "beauty",
  },
  {
    id: "sports",
    title: "Sports & Fitness",
    description: "Equipment and accessories for active lifestyle",
    slug: "sports",
  },
  {
    id: "books",
    title: "Books & Media",
    description: "Books, e-books, and digital content",
    slug: "books",
  }
];