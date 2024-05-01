import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>Header</h1>

      <Suspense fallback={<p>loading///</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
