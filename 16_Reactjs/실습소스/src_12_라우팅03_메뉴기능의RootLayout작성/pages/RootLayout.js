import { Link, Outlet } from "react-router-dom";

function RootLayout(){

    return(
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/signup">signup</Link>
        </div>
    <hr/>
        <div id="detail">
             <Outlet />
        </div>
        </>
    )
}
export default RootLayout;