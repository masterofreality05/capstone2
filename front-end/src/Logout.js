import { useContext } from "react"
import AppContext from "./AppContext"
import {useNavigate } from "react-router-dom";
const Logout = () => {
    let {setUser} = useContext(AppContext) 
    const navigate = useNavigate();
    setUser(null)
    navigate("/")
}

export default Logout;