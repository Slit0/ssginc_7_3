import { Link, Outlet } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";
function RootLayout(){

    return(
        <>
       <MenuNavigation />
    <hr/>
        <div id="detail">
             <Outlet />
        </div>
        </>
    )
}
export default RootLayout;