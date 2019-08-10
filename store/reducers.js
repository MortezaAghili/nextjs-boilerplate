import { InitialState } from './state';
import { actionTypes } from './actionTypes';

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      }
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case actionTypes.RESET:
      return {
        ...state,
        count: exampleInitialState.count
      }
    case actionTypes.LOAD_EXAMPLE_DATA:
      return {
        ...state,
        exampleData: action.data
      }
    case actionTypes.LOADING_DATA_FAILURE:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}