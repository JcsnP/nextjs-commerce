import Link from "next/link";
import SearchInput from "../input/search-input";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#292560]">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl py-2 font-semibold text-white uppercase">
          <Link href="/">ElectroMart</Link>
        </h1>

        <ul className="flex items-center justify-between text-white gap-x-4">
          <li>
            <Link href="/apple">Apple</Link>
          </li>
          <li>
            <Link href="/pc">PC</Link>
          </li>
          <li>
            <Link href="/defend-systems">Defend Systems</Link>
          </li>
          <li>
            <button className="bg-rose-600 py-0.5 px-2 rounded-md hover:bg-rose-700">
              Subscribe
            </button>
          </li>
          <li>
            <Link href="/cart">
              <Image src="/icons/cart.svg" width={28} height={28} alt="cart icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}