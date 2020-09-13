import * as types from './types'

// INITIALIZES CLOCK ON SERVER
// export const serverRenderClock = () => (dispatch) =>
//   dispatch({
//     type: types.TICK,
//     payload: { light: false, ts: Date.now() },
//   })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) => {

  // setInterval(() => {
  //   // console.log('startClock--');
  //   dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  // }, 1000)
}

export const initCounter = (obj) => (dispatch) => {
  console.log('obj===', obj);
  dispatch({ type: types.INITIALISE, payload: obj })
}

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })
