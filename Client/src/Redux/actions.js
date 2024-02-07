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

export const createProyect = (proyect) => async (dispatch) => {
  const newProyect = await axios.post("http://localhost:3001/proyect/create", proyect);
  return dispatch({ type: ACTION_TYPES.CREATE_PROYECT, payload: newProyect.data });
};

export const modifyProyect = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/proyect/modify/${id}`, updatedFields);

      dispatch({
        type: ACTION_TYPES.MODIFY_PROYECT_SUCCESS,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.MODIFY_PROYECT_FAILURE,
        payload: error.message
      });
    }
  };
};

export const deleteProyect = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/proyect/delete/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_PROYECT_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_PROYECT_FAILURE,
        payload: error.message
      });
    }
  };
};


export const getAllAuthors = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/author");
    return dispatch({ type: ACTION_TYPES.GET_ALL_AUTHORS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const createAuthor = (author) => async (dispatch) => {
  const newAuthor = await axios.post("http://localhost:3001/author/create", author);
  return dispatch({ type: ACTION_TYPES.CREATE_AUTHOR, payload: newAuthor.data });
};
