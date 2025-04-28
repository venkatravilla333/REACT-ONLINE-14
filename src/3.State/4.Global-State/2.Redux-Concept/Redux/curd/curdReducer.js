import { BUY_CURD } from "./cardType"


let initialState = {
  noOfCurds : 50
}

export let curdReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CURD:
      return {
        noOfCurds: state.noOfCurds - 1
      }
      break;
    default:
      return state
  }
}