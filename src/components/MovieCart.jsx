import Image from "./Image";
import Rating from "./Rating";
import tagImage from "../assets/tag.svg";
import { getImgUrl } from "../../utils/cine-utility.js";

const MovieCart = ({ movie }) => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        imgSrc={getImgUrl(`${movie.cover}`)}
        altText={movie.title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
        <div className="flex items-center space-x-1 mb-5">
          <Rating value={movie.rating} />
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <Image imgSrc={tagImage} altText="tag" />
          <span>${movie.price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCart;
