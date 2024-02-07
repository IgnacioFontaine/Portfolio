import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  all_proyects: [],
  name_proyect: [],
  
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_AUTHORS:
      return {
        ...state,
        all_proyects: action.payload,
      };

    case ACTION_TYPES.ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;