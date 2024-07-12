import axios from "axios";

export const API = () => {
    return axios.create({
        baseURL: "https://api.vamoscomemorar.com.br"
    })
}