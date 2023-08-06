import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../compoments/layouts/Layout";
import LegalCheckContainer from "../compoments/pages/legalCheck/LegalCheckContainer";
import { useState } from "react";
import NotFound from "../compoments/pages/notFound/NotFound";

const AppRouter = () => {
  const [legalPage, setLegalPage] = useState(true);

  return (
    <>
      {legalPage ? (
        <LegalCheckContainer
          legalPage={legalPage}
          setLegalPage={setLegalPage}
        />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
