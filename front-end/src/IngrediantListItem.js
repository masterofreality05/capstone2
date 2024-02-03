import "./IngrediantListItem.css"
import removeFridgeIngrediant from "./helpers/removeFridgeItem"
import { useContext } from "react"
import UserContext from "./UserContext"

const IngrediantListItem = ({i, u, setIngrediants}) => {
    console.log("this is our ingrediant item what is i:",i)
    const {setFridgeItems} = useContext(UserContext)
    const handleDelete = (i, u) => {
        removeFridgeIngrediant(i, u)
        setFridgeItems(u.ingrediants)
    }
    return(
        <>
         <li className="list-group-item amatic ingrediant-item">{i[0]}<button type="button" className="btn-close btn-margin" aria-label="Close" onClick={() => handleDelete(i[1], u.id)}></button></li>
        </>
    )
}


export default IngrediantListItem;