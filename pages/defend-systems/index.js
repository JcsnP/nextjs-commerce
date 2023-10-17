import { Fragment } from "react";
import Hero from "@/components/layout/hero";
import { filterByType } from "@/lib/product";
import ProductCard from "@/components/cards/product-card";
import SearchInput from "@/components/input/search-input";

export default function DefendSystemsPage() {
  const products = filterByType("defend-systems");
  return (
    <Fragment>
      <Hero title="Defend Systems" image="/images/defend-systems.jpg" />

      <div className="container mx-auto mb-4">
        <div className="flex items-center justify-between">
          <h1 className="title">Defend Systems</h1>
          <SearchInput placeholder="Lockheed Martin F-22 Raptor" />
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
