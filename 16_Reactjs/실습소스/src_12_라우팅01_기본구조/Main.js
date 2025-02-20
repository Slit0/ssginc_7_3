
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",  // http://localhost:3000/
    element: <div>Home 컴포넌트입니다.</div>
    
  },
  {
    path: "/signup", // http://localhost:3000/signup
    element: <div>Signup 컴포넌트입니다</div>,
  },
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
