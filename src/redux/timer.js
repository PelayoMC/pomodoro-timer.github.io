import * as ActionTypes from './actionTypes'

export const Timer = (
  state = {
    isRunning: false,
    time: 0.1 * 60,
    isFinished: false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.PLAY:
      return {
        ...state,
        isRunning: true,
      };
      case ActionTypes.UPDATE:
        let newTime = state.time - 1;
        if(state.isRunning && !state.isFinished) {
            return {
                ...state,
                time: newTime <= 0 ? action.payload2 : newTime,
                isFinished: newTime <= 0 ? true : false
            };
        }
        else if(state.isRunning && state.isFinished) {
            return {
                ...state,
                time: newTime <= 0 ? action.payload : newTime,
                isFinished: newTime <= 0 ? false : true
            };
        }
        else return state
    case ActionTypes.STOP:
      return { ...state, isRunning: false };
    case ActionTypes.RELOAD:
      return {
        ...state,
        isRunning: false,
        time: action.payload,
        isFinished: false
      };
      case ActionTypes.FINISHED:
      return {
        ...state,
        time: action.payload,
        isFinished: true
      };
    default:
      return state;
  }
};