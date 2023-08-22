import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Navba from "./components/Navbar";
import Cursor from "./components/cursor/Cursor"; // Import the custom cursor component
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navba />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <Cursor /> {/* Add the custom cursor */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
