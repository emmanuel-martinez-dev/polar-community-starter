import { api } from "@/lib/polar";
import Link from "next/link";

export default async function Home() {
  const products   = await api.products.list({isArchived: false});
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.result.items.map((product) => {
          const params = new URLSearchParams({
            products: product.id,
          });
          return (
            <Link
              key={product.id}
              href={`/checkout?${params.toString()}`}
              prefetch={false}
              className="rounded-lg border p-4"
            >
              {product.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
