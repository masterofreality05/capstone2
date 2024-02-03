import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import ProfileDetail from "./ProfileDetail";
import UserContext from "./UserContext";
/**A JWT needs to be stored in a safe place inside the user’s browser. 
 * We already established that storing sensitive data inside 
 * localStorage is a bad idea. To reiterate, whatever you do, 
 * don’t store a JWT in localStorage (or sessionStorage). */
const Profile = () => {
    let {user} = useContext(AppContext)
    let[userData, setUserData] = useState(null)
    let [fridgeItems, setFridgeItems] = useState()
    useEffect(() => {
        async function getUser(){
            if(user !== null){
                const config = { headers: { Authorization: `Bearer ${user.token}`}};
                let res = await axios.get(`http://localhost:3001/users/${user.username}`, config)
                setUserData(res.data.user)
            }
        }
        getUser()
    },[fridgeItems])

    return(
        <>
        <UserContext.Provider value={{userData, setFridgeItems}}>
        {userData !== null? <ProfileDetail u={userData} setFridgeItems={setFridgeItems}/>:<h1>You need to sign in or login to see your profile</h1>} 
        </UserContext.Provider>
        </>
    )
}

export default Profile;