import { Fragment } from "react";
import Notification from "./notification";
import Navbar from "./navbar";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <div className={karla.className}>
      <Notification message="Follow us on Instagram for the latest updates" />
      <Navbar />
      <Fragment>{props.children}</Fragment>
    </div>
  );
}