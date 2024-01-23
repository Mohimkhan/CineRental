import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MoveContext";
import Image from "./Image";
import Link from "./Link";
import CartDetails from "./CartDetails";
import ring from "../assets/ring.svg";
import logo from "../assets/logo.svg";
import sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import Moon from "../assets/icons/moon.svg";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const {cartData, setCartData} = useContext(MovieContext);

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link to="index.html">
          <Image imgSrc={logo} width="139" height="26" altText="logo" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to="#"
            >
              <Image imgSrc={ring} width="24" height="24" altText="ring" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to="#"
            >
              <Image imgSrc={sun} width="24" height="24" altText="sun" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to="#"
              onClick={() => setShowCart(true)}
            >
              <Image
                imgSrc={shoppingCart}
                width="24"
                height="24"
                altText="shopping-cart"
              />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
