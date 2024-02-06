import "./IngrediantListItem.css"
import removeFridgeIngrediant from "./helpers/removeFridgeItem"
import axios from "axios"
import { useContext} from "react"
import UserContext from "./UserContext"

const IngrediantListItem = ({i, u}) => {
    const {setFridgeItems} = useContext(UserContext)
    const handleDelete = (i, u) => {
        removeFridgeIngrediant(i, u)
        setFridgeItems(u.ingrediants)
    }
    const handleAdd = async(ingrediants, userID) => {
        console.log("handling add" , ingrediants)
        await axios.post(
            'http://localhost:3001/users/adduseringrediant'
            ,  
                {
                    ingrediants,
                    userID
                },    
        )  
        setFridgeItems(u.ingrediants)
    }
    let ingrediantList = [];
    for(let i of u.ingrediants){
        ingrediantList.push(i[0])
    }
    let userHas = ingrediantList.includes(i[0])
    let remove = <li className="list-group-item amatic ingrediant-item">{i[0]}<button type="button" className="btn-close btn-margin" aria-label="Close" onClick={() => handleDelete(i[1], u.id)}></button></li>
    let add = <li className="list-group-item amatic ingrediant-item">{i[0]}<button type="button" className="btn-success btn-margin" aria-label="Close" onClick={() => {handleAdd(i[0], u.id)}}>Add to Fridge</button></li>

    return(
        <>
        {userHas? remove: add}
        </>
    )
}


export default IngrediantListItem;