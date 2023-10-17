import { readablePrice } from "@/lib/price";
import { readableDescription } from "@/lib/text";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  const { id, title, image, price, description } = props

  return (
    <div className="border w-full rounded-md shadow-md">
      <div className="relative h-52">
        <Image
          src={image}
          fill={true}
          alt="product image"
          className="object-cover rounded-t-md"
        />
      </div>

      <div className="p-3">
        <h1 className="text-xl font-semibold mb-1 truncate">
          <Link href={`/product/${id}`}>{title}</Link>
        </h1>
        <small className="text-rose-500 font-semibold mb-1">
          {readablePrice(price)}
        </small>
        <p className="text-justify text-sm text-slate-600 h-30 overflow-y-hidden">
          {readableDescription(description)}
        </p>
      </div>

      <div className="p-3 flex gap-2 items-center justify-around">
        <button className="product-card--button bg-black text-white">
          + Cart
        </button>
        <button className="product-card--button bg-green-600 text-white hover:bg-green-700">
          Buy
        </button>
      </div>
    </div>
  );
}