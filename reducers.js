// import { count } from 'console';
import { combineReducers } from 'redux'
import * as types from './types'

// COUNTER REDUCER
const counterReducer = (counterState = { counter: 0, init: false }, { type }) => {
  console.log('state---->>', counterState, type)
  switch (type) {
    case types.INITIALISE:
      return { ...counterState, counter: counterState.counter + 10 };
    case types.INCREMENT:
      return { ...counterState, counter: counterState.counter + 1 };
    case types.DECREMENT:
      // return state - 1
      return { ...counterState, counter: counterState.counter - 1 };
    case types.RESET:
      return { counter: 0, init: false }
    default:
      return counterState
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers)
