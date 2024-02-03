    import axios from "axios"
    const baseUrl = "http://localhost:3001/"
    const addSearchedToDB = async(recipeData) => {
      
        let newRecipe = await axios.post(`${baseUrl}recipes/addSearched`, recipeData
        )
        let newRecipeID = newRecipe.data.id 
        for (let ingrediant of recipeData.ingredients){
            let ingrediantID = await axios.post(`${baseUrl}ingrediants/add`, 
            {ingrediant})
            let newRelation = await axios.post(`${baseUrl}addIngrediantRelation?`, {newRecipeID, ingrediantID}
            )
            console.log("new relation created!", newRelation.data)

        }
    }
    
    export default addSearchedToDB;