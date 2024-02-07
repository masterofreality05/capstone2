    import axios from "axios"
    const baseUrl = "http://localhost:3001/"
    const addSearchedToDB = async(recipeData) => {
       await axios.post(`${baseUrl}recipes/add`, recipeData
        )
    }
    
    export default addSearchedToDB;