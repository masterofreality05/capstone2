
import { useEffect,  useContext } from "react"
import NewRecipeForm from "./CreateNewRecipe"
import RecipeListItem from "./RecipeListItem"
import appContext from "./AppContext"

const RecipeList = ({searchedRecipes}) => {
    let user = useContext(appContext)
    useEffect(()=> {
    },[])
    return(
        <>
          <ul>
          {searchedRecipes.map(r => 
               <RecipeListItem recipeData={r.recipe}/>   
            )} 
         </ul> 
         {!user === null?<NewRecipeForm/>:<p>You must be logged in to create a new recipe</p> }
        </>
    )
}
export default RecipeList;