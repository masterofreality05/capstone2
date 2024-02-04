
import SearchRecipeForm from "./forms/SearchRecipeForm"
import RecipeList from "./RecipeList"
import { useState } from "react"

const Home = () => {
   let [searchedRecipes, setSearchedRecipes] = useState(null)
   console.log("rendering our home component",searchedRecipes)
  
     return(
        <>
        <h1>Make your own custom cookbook, store items in your fridges and get recommendations based on your taste</h1>
        <div className="recipe-search"> 
        <SearchRecipeForm setSearchedRecipes={setSearchedRecipes}/>
        {searchedRecipes !== null?<RecipeList searchedRecipes={searchedRecipes}/>:<p></p>}  
        </div>
        </>
     )
}

export default Home;