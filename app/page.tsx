import type { Metadata } from "next";
import CategoryCard from "@/components/category-card";
import ProductCard from "@/components/product-card";
import { MENS_CLOTHING, PAGE_SIZE, PAGE_SORT, WOMENS_CLOTHING } from "@/lib/constants";
import { api } from "@/lib/api";
import { Product } from "@/lib/types";
import { shuffleArray } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Modern Walk | Home",
  description: "The fashion retail store for the modern",
};

export default async function Home() {
  const [mensProducts, womensProducts] = await Promise.all([
    api
      .get(`products/category/${MENS_CLOTHING}`, {
        searchParams: { limit: PAGE_SIZE, sort: PAGE_SORT },
      })
      .json<Product[]>(),
    api
      .get(`products/category/${WOMENS_CLOTHING}`, {
        searchParams: { limit: PAGE_SIZE, sort: PAGE_SORT },
      })
      .json<Product[]>(),
  ]);

  const flashSaleProducts = shuffleArray([
    ...(mensProducts || []),
    ...(womensProducts || []),
  ]);

  return (
    <main className="flex flex-col items-center">
      <div className="container px-6 md:px-0 py-14 space-y-12">
        {/* Flash Sale section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Flash Sale</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {flashSaleProducts?.length > 0 &&
              flashSaleProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </section>

        {/* Categories section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <CategoryCard
              href="/category/mens-clothing"
              category="Men's Clothing"
              className="bg-primary"
            />
            <CategoryCard
              href="/category/womens-clothing"
              category="Women's Clothing"
              className="bg-secondary"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
