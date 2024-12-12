import axios from 'axios'

const baseURL = "http://localhost:8080"

export const getUser = async(user_id) =>{
    try {
        await axios.get(baseURL+`/users/users/${user_id}`)
        .then(res => res.data)
    } catch (error) {
        console.log(error)
    }
  
}