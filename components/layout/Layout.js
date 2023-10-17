import { Fragment } from "react";
import Notification from "./notification";
import Navbar from "./navbar";
import { Karla } from "next/font/google";
import Footer from "./footer";

const karla = Karla({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <div className={karla.className}>
      <Notification message="Follow us on Instagram for the latest updates" />
      <Navbar />
      <Fragment>{props.children}</Fragment>
      <Footer />
    </div>
  );
}