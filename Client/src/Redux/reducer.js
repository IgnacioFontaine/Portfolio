import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  all_products: [],
  all_companies: [],
  product_stock: [],
  product_sold: [],
  un_kilogramo: [],
  cien_gramos: [],
  doscientos_gramos: [],
  product_date: [],
  last_sold: [],
  sold_list_name:[]
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPES.GET_ALL_PRODUCTS:
      return {
        ...state,
        all_products: action.payload,
      };
    
    case ACTION_TYPES.GET_ALL_COMPANIES:
      return {
        ...state,
        all_companies: action.payload,
      };
    
    case ACTION_TYPES.GET_PRODUCT_NAME:
      return {
        ...state,
        product_name: action.payload,
      }
    
    case ACTION_TYPES.GET_PRODUCT_DATE:
      return {
        ...state,
        product_date: action.payload,
      }
    
    case ACTION_TYPES.GET_PRODUCT_TYPE_SOLD:
      return {
        ...state,
        product_sold: action.payload,
        
      }
    
    case ACTION_TYPES.GET_SOLD_PRODUCT_KILO:
      return {
        ...state,
        un_kilogramo: action.payload
      }
    
    case ACTION_TYPES.GET_SOLD_PRODUCT_CIEN:
      return {
        ...state,
        cien_gramos:action.payload
      }
    
    case ACTION_TYPES.GET_SOLD_PRODUCT_DOSCIENTOS:
      return {
        ...state,
        doscientos_gramos:action.payload
      }
    
    case ACTION_TYPES.GET_PRODUCT_TYPE_STOCK:
      return {
        ...state,
        product_stock: action.payload
      }
    
    case ACTION_TYPES.GET_LAST_SOLD:
      return {
        ...state,
        last_sold:action.payload
      }
    
    case ACTION_TYPES.GET_LIST_SOLD_NAME:
      return {
        ...state,
        sold_list_name: action.payload
      }
    
    case ACTION_TYPES.MODIFY_COMPANY_SUCCESS:
      state.all_companies.forEach((company)=>{
                if(company.id === action.payload.id){
                    company.name = action.payload.name
                }
            })
        return {
            ...state,
            all_companies: [...state.all_companies]
      };
    
    case ACTION_TYPES.MODIFY_COMPANY_FAILURE:
      return state;
    
    case ACTION_TYPES.MODIFY_PRODUCT_SUCCESS:
      state.all_products.forEach((product)=>{
                if(product.id === action.payload.id){
                  product.name = action.payload.name
                  product.amount = action.payload.amount
                  product.type = action.payload.type
                }
            })
        return {
            ...state,
            all_products: [...state.all_products]
      };
    
    case ACTION_TYPES.MODIFY_PRODUCT_FAILURE:
      return state;
    
    case ACTION_TYPES.MODIFY_PRODUCT_AMOUNT_LESS_SUCCESS:
      // state.all_products.forEach((product)=>{
      //           if(product.id === action.payload.id){
      //             product.amount = action.payload.amount
      //           }
      //       })
        return {
            ...state,
            all_products: [...state.all_products]
      };
    
    case ACTION_TYPES.MODIFY_PRODUCT_AMOUNT_LESS_FAILURE:
      return state;
    
    case ACTION_TYPES.MODIFY_PRODUCT_AMOUNT_PLUS_SUCCESS:
        return {
            ...state,
            all_products: [...state.all_products]
      };
    
    case ACTION_TYPES.MODIFY_PRODUCT_AMOUNT_PLUS_FAILURE:
      return state;
    
    case ACTION_TYPES.CREATE_PRODUCT:
      if (action.payload.status === 200) {
        return {
          ...state,
          errormsg: {},
        };
      } else {
        return {
          ...state,
          errormsg: action.payload,
        };
      }

      case ACTION_TYPES.CREATE_COMPANY:
      if (action.payload.status === 200) {
        return {
          ...state,
          errormsg: {},
        };
      } else {
        return {
          ...state,
          errormsg: action.payload,
        };
      }

      case ACTION_TYPES.DELETE_COMPANY_SUCCESS:
      return {
        ...state, all_companies: state.all_companies.filter(all_companies => all_companies.id !== action.payload)
      };
    
    case ACTION_TYPES.DELETE_COMPANY_FAILURE:
      return state;
    
    case ACTION_TYPES.DELETE_PRODUCT_SUCCESS:
      return {
        ...state, all_products: state.all_products.filter(all_products => all_products.id !== action.payload)
      };
    
    case ACTION_TYPES.DELETE_PRODUCT_FAILURE:
      return state;


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