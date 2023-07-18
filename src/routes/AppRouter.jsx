import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../compoments/layouts/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<h1>NOT FOUND 404</h1>} />
    </Routes>
  );
};

export default AppRouter;