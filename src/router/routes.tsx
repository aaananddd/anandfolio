import { RouterProvider, createBrowserRouter } from "react-router";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Iam Home</div>,
    },

    {
      path: "/about",
      element: <div>Iam About</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Routes;
