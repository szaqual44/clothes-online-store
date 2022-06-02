import { backendURL } from "../serverMethods";
import { clearCart } from "./cartRedux";
import { loginError, loginStart, loginSuccess, logoutStart } from "./userRedux"

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

// export const logout = async (dispatch) => {
//     try{ 
//         dispatch(logoutStart())     
//     } 
//     catch (err) {
       
//     }
// }
