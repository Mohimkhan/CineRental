import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
  const [theme, _] = useTheme();

  return (
    <>
      <div className={`h-full w-full ${theme === "dark" && "dark"}`}>
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
