import { useEffect, useState, useContext } from "react";
import IngrediantListItem from "./IngrediantListItem";
import axios from "axios";
import AppContext from "./AppContext";
import UserContext from "./UserContext";

const BrowseIngrediants = () => {
    const [allIngrediants, setAllIngrediants] = useState([])
    let {user} = useContext(AppContext)
    let [fridgeItems, setFridgeItems] = useState()
    const [userData, setUserData] = useState()

    console.log("heres our browser ingrediants", allIngrediants)

    useEffect(() => {
        async function getAllIngrediants()  {
            console.log("running get ingrediantzs")
            let results = await axios.get("http://localhost:3001/ingrediants/")
            console.log("what are our results", results) //doesnt seem to want to wrk
            let IngrediantList = []
            for(let row of results.data){
                IngrediantList.push([ row.item_name, row.id])
            }
            
            setAllIngrediants(IngrediantList)

        } 
        getAllIngrediants()
    },[]
    )

    return(
        <>
          <ul className="list-group">
        {allIngrediants.map(i => 
        <UserContext.Provider value={{userData, setFridgeItems}}>
        <IngrediantListItem i={i} u={user}/>
        </UserContext.Provider>
        )}
      

        </ul>
   
        </>
    )
        }


export default BrowseIngrediants;