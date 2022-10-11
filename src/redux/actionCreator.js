import * as ActionTypes from "./actionTypes";

export const playTimer = () => ({
  type: ActionTypes.PLAY,
});

export const uploadTimer = (time, breaktime) => ({
  type: ActionTypes.UPDATE,
  payload: time,
  payload2: breaktime,
});

export const stopTimer = () => ({
  type: ActionTypes.STOP
});

export const reloadTimer = (time) => ({
   type: ActionTypes.RELOAD,
   payload: time,
});

export const finishTimer = () => ({
    type: ActionTypes.FINISHED
 });