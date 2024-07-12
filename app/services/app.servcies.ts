import { API } from "../config/apiConfig";
import { ILogin } from "../login/interface";

export const login = async (creds: ILogin) => {
    const { data } = await API().post('/signin', creds)

    return data
} 

export const validateToken = async (token: String) => {
    const { data } = await API().post('https://api.vamoscomemorar.com.br/validate_token', {token: token})

    return data
} 