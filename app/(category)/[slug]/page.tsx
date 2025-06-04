import ProductsNotAvailableCard from "@/components/products-not-available-card";
import ProductCard from "@/components/product-card";
import { api } from "@/lib/api";
import { MENS_CLOTHING, WOMENS_CLOTHING } from "@/lib/constants";
import type { Product } from "@/lib/types";

const MENS_CLOTHING_SLUG = "mens-clothing";
const WOMENS_CLOTHING_SLUG = "womens-clothing";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

const CategoryPage = async ({ params: { slug } }: CategoryPageProps) => {
  const getCategoryBySlug = (slug: string) => {
    switch (slug) {
      case MENS_CLOTHING_SLUG:
        return MENS_CLOTHING;
      case WOMENS_CLOTHING_SLUG:
        return WOMENS_CLOTHING;
      default:
        return undefined;
    }
  };

  const categoryProducts = await api
    .get(`products/category/${getCategoryBySlug(slug)}`, {
      searchParams: { limit: "8" },
    })
    .json<Product[]>();

  return (
    <main className="flex flex-col items-center">
      <div className="container py-14 space-y-14 px-4 md:px-0">
        <section className="space-y-10">
          <h2 className="text-3xl font-bold capitalize">
            {getCategoryBySlug(slug) ?? slug.replace("-", " ")}
          </h2>
        </section>

        {categoryProducts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
