import { useReducer } from "react";
import { MovieProvider } from "./contexts/MoveContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { cartReducer } from "./reducers/cart.js";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = [];

function App() {
  const [cartData, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeProvider>
        <MovieProvider value={{ cartData, dispatch }}>
          <Home />
          <ToastContainer />
        </MovieProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
