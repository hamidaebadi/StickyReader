import axios from "axios";
const baseUrl = 'http://localhost:3001/api/paths';

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAllPaths = () => {
    //get all paths
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createNewPath = async newPathObj => {
    // add new path
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.post(baseUrl, newPathObj, config)
    return response.data
}

export default {
    getAllPaths,
    createNewPath,
    setToken
}