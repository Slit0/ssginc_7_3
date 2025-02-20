import { Link } from "react-router-dom";


function MenuNavigation(){
    return(
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/signup">signup</Link>
            <Link to="/users">users</Link>
        </div>
        </>
    )
}
export default MenuNavigation;