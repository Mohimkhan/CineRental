import Image from "./Image";
import Link from "./Link";
import Checkout from "../assets/icons/checkout.svg";
import Delete from "../assets/delete.svg";
import { getImgUrl } from "../../utils/cine-utility.js";
import { useContext } from "react";
import { MovieContext } from "../contexts/MoveContext";

const CartDetails = ({ onClose }) => {
  const { cartData, setCartData } = useContext(MovieContext);

  const handleCartRemove = (id) => {
    const newCart = cartData.filter((cartItem) => cartItem.id !== id);

    setCartData(newCart);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cartData.length === 0 ? (<p className="text-3xl">The Cart is Empty!!!</p>) : cartData.map((cartItem) => (
              <div
                key={cartItem.id}
                className="grid grid-cols-[1fr_auto] gap-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    className="rounded overflow-hidden"
                    imgSrc={getImgUrl(`${cartItem.cover}`)}
                    width="60"
                    height="60"
                    altText={cartItem.title}
                  />
                  <div>
                    <h3 className="text-base md:text-xl font-bold">
                      {cartItem.title}
                    </h3>
                    <p className="max-md:text-xs text-[#575A6E]">
                      {cartItem.genre}
                    </p>
                    <span className="max-md:text-xs">${cartItem.price}</span>
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <button
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    onClick={() => handleCartRemove(cartItem.id)}
                  >
                    <Image
                      className="w-5 h-5"
                      imgSrc={Delete}
                      altText="Delete"
                    />
                    <span className="max-md:hidden">Remove</span>
                  </button>
                </div>
              </div>
            ))}

            {/* <div className="grid grid-cols-[1fr_auto] gap-4">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded overflow-hidden"
                  imgSrc={CartItem}
                  altText="cart-item"
                />
                <div>
                  <h3 className="text-base md:text-xl font-bold">Iron Man</h3>
                  <p className="max-md:text-xs text-[#575A6E]">
                    Action/Adventure/Sci-fi
                  </p>
                  <span className="max-md:text-xs">$100</span>
                </div>
              </div>
              <div className="flex justify-between gap-4 items-center">
                <button className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
                  <Image className="w-5 h-5" imgSrc={Delete} altText="Delete" />
                  <span className="max-md:hidden">Remove</span>
                </button>
              </div>
            </div> */}
          </div>
          <div className="flex items-center justify-end gap-2">
            <Link
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              to="#"
            >
              <Image
                imgSrc={Checkout}
                width="24"
                height="24"
                altText="checkout"
              />
              <span>Checkout</span>
            </Link>
            <Link
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              to="#"
              onClick={onClose}
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
