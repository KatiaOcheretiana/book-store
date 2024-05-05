import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Loader } from "./Loader";

export const Layout = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
