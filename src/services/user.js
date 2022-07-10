import axios from 'axios'
const baseUrl = `http://localhost:3001/api/user`

const createUser = async userObj => {
    const response = await axios.post(baseUrl, userObj)
    return response.data
}

const getAllUser = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}

export default {
    createUser,
    getAllUser
}