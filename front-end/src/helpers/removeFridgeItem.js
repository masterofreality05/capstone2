import axios from "axios"

const removeFridgeIngrediant = async (ingrediantID, userID) => {
    let removedIngrediant = await axios.post('http://localhost:3001/users/removeingrediant', {
        ingrediantID,
        userID
    });
    return removedIngrediant
}

export default removeFridgeIngrediant;