import { Link, NavLink } from "react-router-dom";
import './MenuNavigation.css'

function MenuNavigation(){
    return(
        <>
        <div>
            <NavLink to="/" className={({isActive})=>isActive?'menu':undefined}>Home</NavLink>
            <NavLink to="/signup" className={({isActive})=>isActive?'menu':undefined}>signup</NavLink>
            <NavLink to="/login"className={({isActive})=>isActive?'menu':undefined}>login</NavLink>
        </div>
        </>
    )
}
export default MenuNavigation;