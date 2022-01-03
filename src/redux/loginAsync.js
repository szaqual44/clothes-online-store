import { backendURL } from "../serverMethods";
import { loginError, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{ 

        const response = await backendURL.post('/login',user)      
     
        dispatch(loginSuccess(response.data))
    } 
    catch (err) {
        dispatch(loginError())
    }
}