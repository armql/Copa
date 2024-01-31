import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout, Home } from "./imports/global-import";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: (
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-blue-400">loading</div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
