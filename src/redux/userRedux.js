import {createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
       currentUser:null,
       isFetching:false,
       error:false,
    },
    reducers:{
        loginStart: (state) =>{ 
            state.isFetching=true;            
        },
        loginSuccess: (state,action) =>{      
            state.isFetching=false;   
            state.currentUser=action.payload; 
        },
        loginError: (state) =>{    
            state.error=true;     
            state.isFetching=false;       
        },
        logoutStart: (state) => {
            state.currentUser = null;
        }
    }
})

export const {loginStart, loginSuccess, loginError, logoutStart} =userSlice.actions;
export default userSlice.reducer