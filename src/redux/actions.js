import {REQUESTED_DOG_SUCCEEDED, REQUESTED_DOG, REQUESTED_DOG_FAILED} from "./types";
// Шаг 4
import {put, call, takeEvery} from "redux-saga/effects";
import {FETCHED_DOG} from "./types";


// Шаг 0
export const requestDogSuccessAC = (data) => {
  return {type: REQUESTED_DOG_SUCCEEDED, url: data.message}
};

// Шаг 1
export const requestDogAC = () => {
  return {type: REQUESTED_DOG}
};

export const requestDogErrorAC = () => {
  return {type: REQUESTED_DOG_FAILED}
};

// Шаг 2
// export const fetchDogAC = async (dispatch) => {
//   try {
//     dispatch(requestDogAC());
//     const resp = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await resp.json();
//     dispatch(requestDogSuccessAC(data));
//   } catch (err) {
//     dispatch(requestDogErrorAC());
//   }
// };

// Шаг 3
// export const fetchDogAC = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(requestDogAC());
//       const resp = await fetch('https://dog.ceo/api/breeds/image/random');
//       const data = await resp.json();
//       dispatch(requestDogSuccessAC(data));
//     } catch (err) {
//       dispatch(requestDogErrorAC());
//     }
//   }
// };

// Шаг 4
export const fetchDogAC = () => {
  return { type: FETCHED_DOG }
};

export function* watchFetchDog() {
  yield takeEvery(FETCHED_DOG, fetchDogAsyncAC);
}

export function *fetchDogAsyncAC () {
  try {
    yield put(requestDogAC());
    const data = yield call( () =>
      fetch('https://dog.ceo/api/breeds/image/random')
    );
    const json = yield call(() => data.json())
    yield put(requestDogSuccessAC(json))
  } catch (error) {
    yield put(requestDogErrorAC())
  }
}
