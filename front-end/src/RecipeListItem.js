
import "./RecipeListItem.css"
import addRecipeFavourite from "./helpers/AddRecipeFavourite";

const RecipeListItem = ({recipeData, user}) => {
    let r = recipeData.recipe;
    console.log("heres our list item", user)
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
    {user.user !== null?<button className="favourite-button" onClick={() => addRecipeFavourite(r, user)}>Add to Favourites</button>:<button>Login to bookmark</button>}
        
        </div>
        </li>
        </>
    )
}

export default RecipeListItem;