import axios from "axios";

const addRecipeFavourite = async(recipe, userID) => {
    console.log("running add recipe favorite", recipe, userID)
  
    await axios.post("http://localhost:3001/users/adduserrecipe",
    {
        recipe,
        userID
        
   
    })

    //needs to add user_recipe relation

}

export default addRecipeFavourite;