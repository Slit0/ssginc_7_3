import { Link } from "react-router-dom";


function MenuNavigation(){
    return(
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/signup">signup</Link>
            <Link to="/users">users</Link>
            <Link to="/usersParam/1">usersParam</Link>
            <Link to="/usersQueryString?id=3">usersQueryString</Link>
        </div>
        </>
    )
}
export default MenuNavigation;