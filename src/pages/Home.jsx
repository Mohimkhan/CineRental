import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
