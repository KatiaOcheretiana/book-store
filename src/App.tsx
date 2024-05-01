import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="/books" element={<p>Books</p>} />
        <Route path="/basket" element={<h1>basket</h1>} />
      </Route>
      <Route path="*" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
