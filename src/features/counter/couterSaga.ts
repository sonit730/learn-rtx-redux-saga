import { delay, put, takeEvery } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice"
export function* log(action: PayloadAction) {
    console.log('LOG', action)
}

function* handleInrementSaga(action: PayloadAction<number>) {
    console.log('Waiting 1s')
    yield delay(1000)
    console.log('Waiting done, dispatch action');

    //Dispatch action success
    yield put(incrementSagaSuccess(action.payload))
}
export default function* counterSaga() {
    // console.log('COUTER SAGA')
    //Lắng nghe tất cả các action
    yield takeEvery(incrementSaga.toString(), handleInrementSaga)
}