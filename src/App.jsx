import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextComponent from "./context/cartContext";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./themeConfig";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <CartContextComponent>
            <AppRouter />
          </CartContextComponent>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
