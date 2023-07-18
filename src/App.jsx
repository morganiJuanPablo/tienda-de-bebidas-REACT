import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextComponent from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
