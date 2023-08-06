import ItemListContainer from "../compoments/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../compoments/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../compoments/pages/cart/CartContainer";
import CheckoutCompraContainer from "../compoments/pages/checkoutCompra/CheckoutCompraContainer";

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
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkoutCompra",
    path: "/checkoutCompra",
    Element: CheckoutCompraContainer,
  },
];
