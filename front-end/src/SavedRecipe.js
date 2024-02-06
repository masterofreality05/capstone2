
import "./RecipeListItem.css"
import addRecipeFavourite from "./helpers/AddRecipeFavourite";
import AppContext from "./AppContext";
import { useContext } from "react";

const SavedRecipeItem = ({recipeData, user}) => {
    console.log("what is saved item", recipeData) 

    console.log("What is user", user)
    
    return(
        <>
        <li>
        <div className="recipe-list-item">
        <h1>{recipeData.label}</h1>
        <img src={recipeData.image_url}></img>
        <br></br>
        <a href={recipeData.link}>visit this recipe</a>

  
      
        <button className="remove" onClick={() => {addRecipeFavourite(recipeData.id, user.id)}}>Add to favourites</button>
        </div>
        </li>
        </>
    )
}

export default SavedRecipeItem;