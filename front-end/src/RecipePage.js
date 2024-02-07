
import { useEffect,  useContext, useState } from "react"
import NewRecipeForm from "./CreateNewRecipe"
import SavedRecipeItem from "./SavedRecipe"
import AppContext from "./AppContext"
import "./RecipePage.css"
import axios from "axios"

const RecipePage = () => {
    let {user} = useContext(AppContext)
    let [recipesInDB, setRecipesInDb] = useState([])
    console.log(recipesInDB)
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    const alphabetize = (array, letter) => {
        console.log(array, letter)
     
        setRecipesInDb(array.filter((recipe) => recipe.label[0] === letter))


    }
   

    useEffect(() => {
        async function getRecipes(){
          let recipes = await axios.get("http://localhost:3001/recipes")
          setRecipesInDb(recipes.data)
    }
    getRecipes()} 
    ,[])

    return(
        <>
        {alphabet.map(a =>
            <li className="alphabet-letter"><button onClick={() => {alphabetize(recipesInDB,a)}}>{a}</button></li>)}
          <ul>
          {recipesInDB.map(r => 
          <li className="saved-recipe"><SavedRecipeItem recipeData={r} user={user}/></li>
            )} 
         </ul> 
         {!user === null?<NewRecipeForm/>:<p>You must be logged in to create a new recipe</p> }
        </>
    )
}
export default RecipePage;