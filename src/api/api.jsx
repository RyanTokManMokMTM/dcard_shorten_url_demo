import axios from 'axios'
const ServerAPIUpload = (baseURL) => {
    return axios.create({
        baseURL: baseURL || "/api/v1",
        
    })
}

const ServerAPIGet = (baseURL) => {
    return axios.create({
        baseURL: baseURL || "/"
})}

export const apiUploadURL = (uploadData) => {
    return ServerAPIUpload().post("/urls",uploadData,{
        withCredentials:true,
    })
}

export const apiUploadGET = (code) => {
    ServerAPIGet().get(`/${code}`)
}
