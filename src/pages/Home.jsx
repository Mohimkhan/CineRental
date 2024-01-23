import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import { MovieProvider } from "../contexts/MoveContext";
import { useState } from "react";

const Home = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieProvider value={{ cartData, setCartData }}>
        <div className={`h-full w-full`}>
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MovieList />
            </div>
          </main>
          <Footer />
        </div>
      </MovieProvider>
    </>
  );
};

export default Home;
