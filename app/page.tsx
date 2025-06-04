import type { Metadata } from "next";
import CategoryCard from "@/components/category-card";
import ProductCard from "@/components/product-card";

export const metadata: Metadata = {
  title: "Modern Walk | Home",
  description: "The fashion retail store for the modern",
};

const flashSaleProducts = [
  {
    id: 1,
    title: "Men T-Shirt",
    price: 350,
    description: "This is some dummy description",
    category: "men's clothing",
    image: "/placeholder.svg",
    rating: {
      rate: 5,
      count: 5,
    },
  },
  {
    id: 2,
    title: "Lady Blouse",
    price: 350,
    description: "This is some dummy description",
    category: "women's clothing",
    image: "/placeholder.svg",
    rating: {
      rate: 5,
      count: 5,
    },
  },
  {
    id: 3,
    title: "Men T-Shirt",
    price: 350,
    description: "This is some dummy description",
    category: "men's clothing",
    image: "/placeholder.svg",
    rating: {
      rate: 5,
      count: 5,
    },
  },
  {
    id: 4,
    title: "Lady Blouse",
    price: 350,
    description: "This is some dummy description",
    category: "women's clothing",
    image: "/placeholder.svg",
    rating: {
      rate: 5,
      count: 5,
    },
  },
];

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="container py-14 space-y-14">
        {/* Flash Sale section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Flash Sale</h2>

          <div className="grid grid-cols-4 gap-10">
            {flashSaleProducts?.length > 0 &&
              flashSaleProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </section>

        {/* Categories section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Categories</h2>

          <div className="grid grid-cols-2 gap-10">
            <CategoryCard category="Men's Clothing" className="bg-primary" />
            <CategoryCard
              category="Women's Clothing"
              className="bg-secondary"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
