import axios from 'axios'
const baseUrl = `http://localhost:3001/api/user`

const createUser = userObj => {
    return axios.post(baseUrl, userObj)
    .then(res => res.data)
}

export default {
    createUser
}