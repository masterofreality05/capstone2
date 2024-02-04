import axios from "axios";

async function getUser(user, setUserData){
    console.log("inside get user function ")
        const config = { headers: { Authorization: `Bearer ${user.token}`}};
        let res = await axios.get(`http://localhost:3001/users/${user.username}`, config)
        console.log(res.data.user)
        setUserData(res.data.user)
        return res.data
}

export default getUser;