import { call, delay, fork, put, take, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { authActions, LoginPayLoad } from "./authSlice";
import {push} from 'connected-react-router'
function* handleLogin(payload:LoginPayLoad){
 
    try {
        yield delay(5000) //Fake API wait 5s
        localStorage.setItem("access_token","fake_token")
        yield put(authActions.loginSuccess({
            id:"1",
            name:"Son-SparkMinds"
        }))

        //redirect to admin page
        yield put(push('/admin'))
    } catch (error) {
        // yield put(authActions.loginFailed(error.message))
    }
   
}

function* handleLogout(){
    yield delay(1000) //Fake API wait 1s
    localStorage.removeItem("access_token")

    //redirect to admin page
    yield put(push('/login'))

}

function* watchLoginFlow(){
    console.log('🔴', "watchLoginFlow")
    while(true){
        const isLoggedIn = localStorage.getItem('access_token')
        if(!isLoggedIn){
            const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type)
            yield fork(handleLogin,action.payload)
        }
        yield take(authActions.logout.type)
        yield call(handleLogout) // Blocking - đứng đợi handleOut xong thì mới bắt đầu vòng loop mới
    }
}

export function* authSaga(){
    // yield takeEvery(authActions.login.toString(), watchLoginFlow) // Đợi liên tục, take: đợi 1 lần
    localStorage.removeItem("access_token")

    yield fork(watchLoginFlow) // Non - blocking
}

