
import "./RecipeListItem.css"


const RecipeListItem = ({recipeData}) => {
    console.log("rendering recipe list item", recipeData)
    return(
        <>
        <li>
        <div className="recipe-list-item">
        <h1>{recipeData.label}</h1>
        <img src={recipeData.image}></img>
        <br></br>
        <a href={recipeData.url}>visit this recipe</a>
        <ul>
        {recipeData.ingredients.map(i => 
            <li className="ingrediant-item">{i.food}</li>
            )}
            </ul>
        <button className="favourite-button" onClick={console.log("clicked") }>Add to Favourites</button>
        </div>
        </li>
        </>
    )
}

export default RecipeListItem;