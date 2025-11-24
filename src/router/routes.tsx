import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "../components/layouts/RootLayout";
import { lazy } from "react";
const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about"));
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "/about",
          element: <AboutPage />,
        },

        {
          path: "/dashboard",
          element: <AboutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
