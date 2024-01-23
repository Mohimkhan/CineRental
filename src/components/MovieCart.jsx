import { useContext, useState } from "react";
import Image from "./Image";
import Rating from "./Rating";
import Link from "./Link";
import MovieDetailsModal from "./MovieDetailsModal";
import tagImage from "../assets/tag.svg";
import { getImgUrl } from "../../utils/cine-utility.js";
import { MovieContext } from "../contexts/MoveContext.jsx";

const MovieCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const found = cartData.find((item) => item.id === movie.id);

    if (!found) {
      setCartData((prev) => [...prev, movie]);
    } else {
      console.error(`The movie ${movie.title} is added to cart already!!!`);
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <Link to="#" onClick={() => handleMovieSelection(movie)}>
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
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <Image imgSrc={tagImage} altText="tag" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};

export default MovieCart;
