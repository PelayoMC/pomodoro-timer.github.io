import * as ActionTypes from './actionTypes'

export const Timer = (
  state = {
    isRunning: false,
    time: 1500
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
        if(state.isRunning) 
            return {
                ...state,
                time: state.time -= action.payload
            };
        else return state
    case ActionTypes.STOP:
      return { ...state, isRunning: false, };
    case ActionTypes.RELOAD:
      return {
        ...state,
        isRunning: false,
        time: 1500
      };
    default:
      return state;
  }
};