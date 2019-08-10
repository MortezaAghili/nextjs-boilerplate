import { actionTypes } from './actionTypes';

export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

export const loadExampleData = data => {
  return { type: actionTypes.LOAD_EXAMPLE_DATA, data }
}

export const loadingExampleDataFailure = () => {
  return { type: actionTypes.LOADING_DATA_FAILURE }
}