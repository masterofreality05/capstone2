import axios from "axios";

const addRecipeFavourite = async(recipe, userID) => {
    console.log(userID)
    console.log("typeof recioe", recipe)
   

    if(recipe.label){
        let recipeInDB = await axios.get(`http://localhost:3001/recipes/${recipe.label}`)
        console.log("RECIPE IS HERE", recipeInDB)
        recipe = recipeInDB.data.id
      
    } else {
        recipe = recipe.id
    }
    if(userID.id === undefined){
        let user = await axios.get(`http://localhost:3001/users/${userID.user.username}`)
        userID = user.data.user.id
        console.log("userID", user.data.user.id)
    } else {
        userID = userID.id
    }

  
    

    await axios.post("http://localhost:3001/users/adduserrecipe",
    {
        recipe,
        userID
    })
}

export default addRecipeFavourite;