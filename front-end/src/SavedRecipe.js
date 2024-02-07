
import "./RecipeListItem.css"
import addRecipeFavourite from "./helpers/AddRecipeFavourite";

const SavedRecipeItem = ({recipeData, user}) => {  
    return(
        <>
        <li>
        <div className="recipe-list-item">
        <h1>{recipeData.label}</h1>
        <img src={recipeData.image_url}></img>
        <br></br>
        <a href={recipeData.link}>visit this recipe</a>
        <br></br>
        <button className="remove" onClick={() => {addRecipeFavourite(recipeData.id, user)}}>Add to favourites</button>
        </div>
        </li>
        </>
    )
}

export default SavedRecipeItem;