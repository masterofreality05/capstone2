import axios from "axios";

async function getUser(user, setUserData){
        const config = { headers: { Authorization: `Bearer ${user.token}`}};
        let res = await axios.get(`http://localhost:3001/users/${user.username}`, config)
        setUserData(res.data.user)
        return res.data
}

export default getUser;