import axios from "axios";
const baseUrl = 'http://localhost:3001/api/paths';

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAllPaths = async() => {
    //get all paths
    const response = await axios.get(baseUrl)
    return response.data
}

const createNewPath = async newPathObj => {
    // add new path
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.post(baseUrl, newPathObj, config)
    return response.data
}

const deleteLearningPath = async(pathId) => {
    await axios.delete(`${baseUrl}/${pathId}`)
}

export default {
    getAllPaths,
    createNewPath,
    setToken,
    deleteLearningPath
}