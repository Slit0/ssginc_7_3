
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Signup,{users_add_action} from "./pages/Signup";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Users,{users_loader} from "./pages/Users";
import { fetchUserList } from "./api/httpService";

// root용 loader 함수
async function root_loader(){
    const resonse = await fetchUserList(1);
    console.log("response>>>>>>>>>>>>>>>:", resonse)
    return resonse;
  }
const router = createBrowserRouter([
  {
    path:"/",  
    element:<RootLayout/>,
    errorElement:<ErrorPage />,
    id:'root',
    loader:root_loader,
    children:[
      {
        path: "/",  // http://localhost:3000/
        element: <Home />

      },
      {
        path: "/signup", // http://localhost:3000/signup
        element: <Signup />,
        action:users_add_action
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
