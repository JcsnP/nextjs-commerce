import ProductCard from '@/components/cards/product-card'
import Image from 'next/image'
import AllProducts from '@/data/all-product.json'

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="mt-6 mb-5 text-4xl font-semibold">Our Products</h1>

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
  );
}
