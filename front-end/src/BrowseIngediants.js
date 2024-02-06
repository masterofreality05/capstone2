import { useEffect, useState, useContext } from "react";
import IngrediantListItem from "./IngrediantListItem";
import axios from "axios";
import AppContext from "./AppContext";
import UserContext from "./UserContext";
import getUser from "./helpers/getUser";

const BrowseIngrediants = () => {
    const [allIngrediants, setAllIngrediants] = useState([])
    let {user} = useContext(AppContext)
    let [fridgeItems, setFridgeItems] = useState()
    const [userData, setUserData] = useState(null)
    console.log("Browser ingrediants component", userData)


    useEffect(() => {
        async function getAllIngrediants()  {
            let results = await axios.get("http://localhost:3001/ingrediants/")
            let IngrediantList = []
            for(let row of results.data){
                IngrediantList.push([ row.item_name, row.id])
            }
            if(user !== null) {
                console.log("getting user")
                getUser(user, setUserData)}
            setAllIngrediants(IngrediantList)
        } 
            async function getUser(){
                if(user !== null){
                    const config = { headers: { Authorization: `Bearer ${user.token}`}};
                    let res = await axios.get(`http://localhost:3001/users/${user.username}`, config)
                    setUserData(res.data.user)
                } else {
                    setUserData({ingrediants: []})
                }
            }  
        getUser()
        getAllIngrediants()
    },[fridgeItems]
    )

    return(
        <>
          <ul className="list-group">
        <UserContext.Provider value={{userData, setFridgeItems}}>
        {allIngrediants.map(i => 
        <IngrediantListItem i={i} u={userData !== null? userData:{ingrediants:[]}}/>
        )}
         </UserContext.Provider>
        </ul>
        </>
    )
        }


export default BrowseIngrediants;