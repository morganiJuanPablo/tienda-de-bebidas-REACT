import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compoments/layouts/navbar/Navbar";
import ItemListContainer from "./compoments/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./compoments/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>

        <Route path="*" element={<h1>NOT FOUND 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
