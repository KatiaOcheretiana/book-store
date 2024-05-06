import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useDispatch } from "react-redux";
import { getBooks } from "./redux/books/operations";
import { AppDispatch } from "./redux/store";
import { getCurrencyValue } from "./redux/currency/operations";

const BooksPage = lazy(() => import("./pages/BooksPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getCurrencyValue());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<BooksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
