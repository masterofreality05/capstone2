
import { useEffect,  useContext, useState } from "react"
import NewRecipeForm from "./CreateNewRecipe"
import SavedRecipeItem from "./SavedRecipe"
import AppContext from "./AppContext"
import axios from "axios"

const RecipePage = () => {
    let {user} = useContext(AppContext)
    let [recipesInDB, setRecipesInDb] = useState([])

    useEffect(() => {
        async function getRecipes(){
          let recipes = await axios.get("http://localhost:3001/recipes/")
          setRecipesInDb(recipes.data)
    }
    getRecipes()} 
    ,[])

    return(
        <>
          <ul>
          {recipesInDB.map(r => 
          <li><SavedRecipeItem recipeData={r} user={user}/></li>
            )} 
         </ul> 
         {!user === null?<NewRecipeForm/>:<p>You must be logged in to create a new recipe</p> }
        </>
    )
}
export default RecipePage;