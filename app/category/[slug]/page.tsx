import type { Metadata } from "next";
import ProductsNotAvailableCard from "@/components/products-not-available-card";
import ProductCard from "@/components/product-card";
import { api } from "@/lib/api";
import { CATEGORIES } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { capitalizeWords } from "@/lib/utils";

const getCategoryBySlug = (slug: string) =>
  CATEGORIES.find(cat => cat.slug === slug)?.label;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: CategoryPageProps): Promise<Metadata> => {
  const { slug } = await params;

  return {
    title: `Modern Walk | ${capitalizeWords(
      getCategoryBySlug(slug) ?? slug.replace("-", " ")
    )}`,
    description: "The fashion retail store for the modern",
  };
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const categoryProducts = await api
    .get(`products/category/${getCategoryBySlug(slug)}`, {
      searchParams: { limit: "8", sort: "asc" },
    })
    .json<Product[]>();

  return (
    <main className="flex flex-col items-center">
      <div className="container py-14 space-y-14 px-6 md:px-0">
        <section className="space-y-10">
          <h2 className="text-3xl font-bold capitalize">
            {getCategoryBySlug(slug) ?? slug.replace("-", " ")}
          </h2>
        </section>

        {categoryProducts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {categoryProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <ProductsNotAvailableCard />
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
