
import { useEffect,  useContext, useState } from "react"
import NewRecipeForm from "./CreateNewRecipe"
import SavedRecipeItem from "./SavedRecipe"
import appContext from "./AppContext"
import axios from "axios"


const RecipePage = () => {
    
    let [recipesInDB, setRecipesInDb] = useState([])
    const [userData, setUserData] = useState(null)
    console.log("rendering our recipe page", userData)
    let user = useContext(appContext)
    console.log("here is our recipe page", recipesInDB)

    useEffect(() => {
        async function getUser(){
            if(user !== null){
                console.log("user did not equal null", user)
                const config = { headers: { Authorization: `Bearer ${user.token}`}};
                let res = await axios.get(`http://localhost:3001/users/${user.user.username}`, config)
                setUserData(res.data.user)}
            }
        async function getRecipes(){
          console.log("running get recipes")
          let recipes = await axios.get("http://localhost:3001/recipes/")
          console.log("here", recipes)
          if(user !== null) {
            console.log("getting user")
            getUser(user, setUserData)}
          setRecipesInDb(recipes.data)
        }
       getUser()
       getRecipes()}
    
    ,[])


    return(
        <>
          <ul>
          {recipesInDB.map(r => 
          <li><SavedRecipeItem recipeData={r} user={userData}/></li>
            )} 
      
         </ul> 
         {!user === null?<NewRecipeForm/>:<p>You must be logged in to create a new recipe</p> }
        </>
    )
}
export default RecipePage;