
import "./RecipeListItem.css"
import addRecipeFavourite from "./helpers/AddRecipeFavourite";



const RecipeListItem = ({recipeData, user}) => {
    let r = recipeData.recipe;

    return(
        <>
        <li>
        <div className="recipe-list-item">
        <h1>{recipeData.label}</h1>
        <img src={r.image}></img>
        <br></br>
        <a href={r.url}>visit this recipe</a>
        <ul>
        {r.ingredients.map(i => 
            <li className="ingrediant-item">{i.food}</li>
            )}
            </ul>
        <br></br>
        <button className="favourite-button" onClick={() => addRecipeFavourite(r, user)}>Add to Favourites</button>
        </div>
        </li>
        </>
    )
}

export default RecipeListItem;