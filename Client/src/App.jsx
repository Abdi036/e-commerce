import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Phone from "./pages/Phone";
import Laptops from "./pages/Laptops";
import Tablets from "./pages/Tablets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/phones",
        element: <Phone />,
      },
      {
        path: "/laptops",
        element: <Laptops />,
      },
      {
        path: "/tablets",
        element: <Tablets />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
