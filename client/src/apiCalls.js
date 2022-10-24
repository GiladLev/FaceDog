import {publicRequest} from "./requestMethods"

export const loginCall = async (userCredentials, dispatch) =>{
    dispatch({type: "LOGIN_START"})
    try {
        const res = await publicRequest.post("auth/login", userCredentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    }
}
export const registerCall = async (userCredentials, dispatch) =>{
    dispatch({type: "Register_START"})
    try {
        const res = await publicRequest.post("auth/register", userCredentials)
        dispatch({type: "Register_SUCCESS", payload: res.data})
    } catch (error) {
        dispatch({type: "Register_FAILURE", payload: error})
    }
}




