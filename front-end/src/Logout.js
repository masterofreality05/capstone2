import { useContext } from "react"
import AppContext from "./AppContext"
import { Navigate, useNavigate } from "react-router-dom";
const Logout = () => {
    console.log("running logout")
    let {setUser} = useContext(AppContext) 
    const navigate = useNavigate();
    setUser(null)
    navigate("/")

    //set user = null
    //navigate back to homepage and re-render our app.

}

export default Logout;