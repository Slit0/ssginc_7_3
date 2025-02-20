import { Link, NavLink } from "react-router-dom";
import './MenuNavigation.css'

function MenuNavigation(){
    return(
        <>
        <div>
            <NavLink to="/" className={({isActive})=>isActive?'menu':undefined}>Home</NavLink>
            <NavLink to="/signup" className={({isActive})=>isActive?'menu':undefined}>signup</NavLink>
            <NavLink to="/login"className={({isActive})=>isActive?'menu':undefined}>login</NavLink>
            <NavLink to="/users/2">users/2</NavLink>
            <NavLink to="/users/1">users/1</NavLink>
            <NavLink to="/products?userid=inky4832">products</NavLink>
        </div>
        </>
    )
}
export default MenuNavigation;