import Image from './Image';
import logo from '../assets/logo.svg';
import ring from '../assets/ring.svg';
import sun from '../assets/icons/sun.svg';
import shoppingCart from '../assets/shopping-cart.svg';
import Link from './Link';

const Header = () => {
  return (
    <header>
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
            >
              <Image
                imgSrc={shoppingCart}
                width="24"
                height="24"
                altText="shopping-cart"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
