import { Link } from "react-router-dom";


function MenuNavigation(){
    return(
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/signup">signup</Link>
        </div>
        </>
    )
}
export default MenuNavigation;