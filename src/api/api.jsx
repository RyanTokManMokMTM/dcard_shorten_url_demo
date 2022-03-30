import axios from 'axios'
const ServerAPIUpload = (baseURL) => {
    return axios.create({
        baseURL: baseURL || "http://ec2-3-0-57-41.ap-southeast-1.compute.amazonaws.com:8080/api/v1",
        
    })
}

const ServerAPIGet = (baseURL) => {
    return axios.create({
        baseURL: baseURL || "http://ec2-3-0-57-41.ap-southeast-1.compute.amazonaws.com:8080//"
})}

export const apiUploadURL = (uploadData) => {
    return ServerAPIUpload().post("/urls",uploadData,{
        withCredentials:true,
    })
}

export const apiUploadGET = (code) => {
    ServerAPIGet().get(`/${code}`)
}
