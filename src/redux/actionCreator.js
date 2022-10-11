import * as ActionTypes from "./actionTypes";

export const playTimer = () => ({
  type: ActionTypes.PLAY,
});

export const uploadTimer = (time) => ({
  type: ActionTypes.UPDATE,
  payload: time,
});

export const stopTimer = (dishes) => ({
  type: ActionTypes.STOP
});

export const reloadTimer = () => ({
    type: ActionTypes.RELOAD
  });