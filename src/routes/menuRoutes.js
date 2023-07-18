import ItemListContainer from "../compoments/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../compoments/pages/itemDetail/ItemDetailContainer";
import MiniatureCards from "../compoments/common/miniatureCards/MiniatureCards";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },

  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id:"cart",
    path:"/cart",
    Element: MiniatureCards,
  }
];
