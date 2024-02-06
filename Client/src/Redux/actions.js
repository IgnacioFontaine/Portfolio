import axios from "axios";
import ACTION_TYPES from './actionTypes'


export const getAllProyects = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/proyect");
    return dispatch({ type: ACTION_TYPES.GET_ALL_PROYECTS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const getProyectName = (name) => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:3001/proyect?name=${name}`);
    return dispatch({ type: ACTION_TYPES.GET_PROYECT_NAME, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};