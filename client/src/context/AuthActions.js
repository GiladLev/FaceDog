export const LoginStart = (userCredentials)=>({
    type: "LOGIN_START",
})
export const LoginSuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    payload: user,
})
export const LoginFailure = (error)=>({
    type: "LOGIN_FAILURE",
    payload: error
})
export const RegisterStart = (userCredentials)=>({
    type: "Register_START",
})
export const RegisterSuccess = (user)=>({
    type: "Register_SUCCESS",
    payload: user,
})
export const RegisterFailure = (error)=>({
    type: "Register_FAILURE",
    payload: error
})