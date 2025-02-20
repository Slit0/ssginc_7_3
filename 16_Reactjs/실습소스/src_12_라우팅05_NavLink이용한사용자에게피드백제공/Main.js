
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage />,
    children:[
      {
        path: "/",  // http://localhost:3000/
        element: <Home />
        
      },
      {
        path: "/signup", // http://localhost:3000/signup
        element: <Signup />,
      },
      {
        path: "/login", // http://localhost:3000/login
        element: <Login />,
      },
    ]
  }
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
