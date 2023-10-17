import ProductCard from "@/components/cards/product-card";
import Hero from "@/components/layout/hero";
import { filterByType } from "@/lib/product";
import { Fragment } from "react";

export default function ApplePage() {
  const products = filterByType('apple')
  return (
    <Fragment>
      <Hero title="Apple" image="/images/apple.jpg" />

      <div className="container mx-auto">
        <h1 className="title">Apple Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((item, key) => (
            <ProductCard
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
              key={key}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}