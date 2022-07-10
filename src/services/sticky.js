import axios from "axios";
const baseUrl = `http://localhost:3001/api/stickies`

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAllStickies = async() => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getUserStickies = async(userId) => {
    const response = await axios.get(`${baseUrl}/${userId}`)
    return response.data
}
const createSticky = async(stickyObj) => {
    const config = {
        headers:{Authorization: token}
    }
    
    const response = await axios.post(baseUrl, stickyObj, config)
    return response.data
    
}

export default {
    getAllStickies,
    createSticky,
    setToken,
    getUserStickies
}