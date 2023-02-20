import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main";
import Home from "./pages/home/Home";
import Blogs from "./pages/blog/Blogs";
import Contact from "./pages/contact/Contact";
import Aboutus from "./pages/about/Aboutus";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <Aboutus></Aboutus>,
        },
        {
          path: "/blog",
          element: <Blogs></Blogs>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
