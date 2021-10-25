import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { User } from "models/user";

export interface LoginPayLoad {
    user:string,
    password:string
}

export interface AuthState {
    isLoggedIn:boolean,
    logging?:boolean;
    currentUser?:User
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action:PayloadAction<LoginPayLoad>){
        // console.log("🚀 ~ file: authSlice.ts ~ line 27 ~ login ~ action", action.payload)
            
            state.logging = true
        },
        loginSuccess(state,action:PayloadAction<User>){
            state.isLoggedIn = true
            state.logging = false;
            state.currentUser = action.payload
        },
        loginFailed(state,action:PayloadAction<string>){
            state.logging = false
        },

        logout(state){
            state.isLoggedIn = false;
            state.currentUser = undefined
        }
    }

})

//Actions
export const authActions = authSlice.actions
console.log("🚀 ~ file: authSlice.ts ~ line 16 ~ authActions", authActions)

//Selector
export  const selectIsLoggedIn = (state:any) => state.auth.isLoggedIn
export  const selectIsLogging = (state:any) => state.auth.logging
//Reducer
const authReducer = authSlice.reducer
export default authReducer