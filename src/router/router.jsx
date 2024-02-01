import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  MainLayout,
  Home,
  Produce,
  About,
  Recipes,
  Stories,
  JoinUs,
} from "./imports/global-import";
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
      {
        path: "produce",
        element: (
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-blue-400">loading</div>
            }
          >
            <Produce />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-blue-400">loading</div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "recipes",
        element: (
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-blue-400">loading</div>
            }
          >
            <Recipes />
          </Suspense>
        ),
      },
      {
        path: "stories",
        element: (
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-blue-400">loading</div>
            }
          >
            <Stories />
          </Suspense>
        ),
      },
      {
        path: "join-us",
        element: (
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-blue-400">loading</div>
            }
          >
            <JoinUs />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
