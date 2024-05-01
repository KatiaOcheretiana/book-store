import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useDispatch } from "react-redux";
import { getBooks } from "./redux/books/operations";
import { AppDispatch } from "./redux/store";

const Books = lazy(() => import("./pages/Books"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="/basket" element={<h1>basket</h1>} />
      </Route>
      <Route path="*" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
