import ProductCard from "@/components/cards/product-card";
import SearchInput from "@/components/input/search-input";
import Hero from "@/components/layout/hero";
import { filterByType } from "@/lib/product";
import { Fragment } from "react";

export default function PCPage() {
  const products = filterByType('pc')
  return (
    <Fragment>
      <Hero title="Personal Computer" image="/images/pc.jpg" />

      <div className="container mx-auto mb-4">
        <div className="flex items-center justify-between">
          <h1 className="title">Personal Computer</h1>
          <SearchInput placeholder="Alienware Aurora R69" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((item, key) => (
            <ProductCard
              id={item.id}
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