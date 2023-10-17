import ProductCard from '@/components/cards/product-card'
import Image from 'next/image'
import AllProducts from '@/data/all-product.json'
import { Fragment } from 'react';
import Hero from '@/components/layout/hero';

export default function Home() {
  return (
    <Fragment>
      <Hero title="All Products" image="/images/all-products.jpg" />

      <div className="container mx-auto">
        <h1 className="title">Our Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {AllProducts.map((item, key) => (
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
