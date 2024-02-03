import { NavLink } from "react-router-dom"
import React, { useContext } from "react";
import AppContext from "./AppContext";
import "./Navbar.css"

const Navbar = () => {
    const {user} = useContext(AppContext)
    return(
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand navlink-amatic">Home</NavLink>
        <NavLink to="/ingrediants" className="navbar-brand navlink-amatic">ingrediants</NavLink>
        <NavLink to="/recipes" className="navbar-brand navlink-amatic">Recipes</NavLink>
        <NavLink to="/profile" className="navbar-brand navlink-amatic">Profile</NavLink>
        {user !== null?<NavLink to="/logout" className="navbar-brand navlink-amatic">Logout</NavLink>:<NavLink className="navbar-brand navlink-amatic" to="/loginregister">Sign in</NavLink>}
    </div>
    )
}


export default Navbar;