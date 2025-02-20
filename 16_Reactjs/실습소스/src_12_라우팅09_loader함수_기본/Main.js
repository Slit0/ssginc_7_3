
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/Users";
import { fetchUserList } from "./api/httpService";
//loader 외부함수
async function users_loader(){
  const resonse = await fetchUserList(2);
  console.log("response>>>>>>>>>>>>>>>:", resonse)
  return resonse;
}

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
        path: "/users", // http://localhost:3000/signup
        element: <Users />,
        loader:users_loader
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
