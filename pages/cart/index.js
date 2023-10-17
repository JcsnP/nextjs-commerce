import CartItem from "@/components/cart/cart-item";
import { Fragment } from "react";

export default function CartPage() {
  return(
    <Fragment>
      <div className="container mx-auto">
        <h1 className="title">Shopping Cart</h1>
        <CartItem />
      </div>
    </Fragment>
  )
}