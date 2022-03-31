import axios from 'axios'
const ServerAPIUpload = (baseURL) => {
    return axios.create({
        baseURL: baseURL || "https://ec2-3-0-57-41.ap-southeast-1.compute.amazonaws.com/api/v1",
        headers: { 'Content-Type': 'application/json'},
    })
}

export const apiUploadURL = (uploadData) => {
    return ServerAPIUpload().post("/urls",uploadData)
}

