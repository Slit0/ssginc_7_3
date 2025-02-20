
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",  // http://localhost:3000/
    element: <Home />
    
  },
  {
    path: "/signup", // http://localhost:3000/signup
    element: <Signup />,
  },
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
