import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  all_proyects: [],
  name_proyect: [],
  
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_PROYECTS:
      return {
        ...state,
        all_proyects: action.payload,
      };
    
    case ACTION_TYPES.MODIFY_PROYECT_SUCCESS:
      state.all_proyects.forEach((proyect)=>{
                if(proyect.id === action.payload.id){
                    proyect.name = action.payload.name
                }
            })
        return {
            ...state,
            all_proyects: [...state.all_proyects]
      };
    
    case ACTION_TYPES.MODIFY_PROYECT_FAILURE:
      return state;
    
    case ACTION_TYPES.GET_PROYECT_NAME:
      return {
        ...state,
        name_proyect: action.payload,
      }

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