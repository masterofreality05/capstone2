
import SearchRecipeForm from "./forms/SearchRecipeForm"
import RecipeList from "./RecipeList"
import { useState, useContext } from "react"
import AppContext from "./AppContext"

const Home = () => {
   let [searchedRecipes, setSearchedRecipes] = useState(null)
   let {user} = useContext(AppContext)
   console.log("home component", user)
     return(
        <>
        {user?<h1>Hi there {user.username}, welcome back!</h1>: <h1>Login to get started</h1>}
       
        <div className="recipe-search"> 
        <SearchRecipeForm setSearchedRecipes={setSearchedRecipes}/>
        {searchedRecipes !== null?<RecipeList searchedRecipes={searchedRecipes}/>:<p></p>}  
        </div>
        </>
     )
}
export default Home;