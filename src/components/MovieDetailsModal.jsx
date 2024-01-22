import { getImgUrl } from "../../utils/cine-utility";
import tagImage from "../assets/tag.svg";
import Link from "./Link";
import Image from "./Image";

const MovieDetailsModal = ({ movie, onClose, onCartAdd }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <Image
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            imgSrc={getImgUrl(`${movie.cover}`)}
            altText={movie.title}
          />
          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {movie.title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {movie.genre}
              </span>
              <div></div>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16">
              {movie.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-2">
              <Link
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                to="#"
                onClick={(e) => onCartAdd(e, movie)}
              >
                <Image imgSrc={tagImage} altText="tag" />
                <span>${movie.price} | Add to Cart</span>
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
    </div>
  );
};

export default MovieDetailsModal;
