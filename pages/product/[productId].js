import { readablePrice } from "@/lib/price";
import { findById } from "@/lib/product";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router"

export default function ViewProduct() {
  const router = useRouter()
  const { productId } = router.query

  if(!productId) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  const product = findById(productId)

  if(!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="my-2 border rounded-md border-gray-200 shadow-sm w-fit px-3 hover:bg-gray-200">
        <Link href="/">Homepage</Link>
      </h1>
      <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-4">
        <div className="relative w-full h-[480px]">
          <Image
            src={product.image}
            fill={true}
            alt="product image"
            className="object-cover rounded-2xl"
          />
        </div>

        <div>
          <h3 className="uppercase text-slate-500 mb-1">{product.type}</h3>
          <h1 className="text-4xl font-semibold mb-1">{product.title}</h1>
          <h3 className="text-rose-500 font-black text-2xl mb-2">
            {readablePrice(product.price)}
          </h3>
          <p className="text-lg indent-8">{product.description}</p>

          <div className="mt-3">
            <button className="product-view--button bg-black text-white mb-1.5">
              Add to Cart
            </button>
            <button className="product-view--button bg-green-600 text-white mb-1.5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}