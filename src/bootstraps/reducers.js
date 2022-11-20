import * as CONST from './constatns'

const initialState = {
  users: [], 
  loading: false,
  error: null
}


const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch(type){
    // LOADING 
    case CONST.LOAD_USERS_START: 
    case CONST.POST_USER_START: 
      return {
        ...state,
        loading: true,
      };
    
    // SUCCESS
    case CONST.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload
      };
    case CONST.POST_USER_SUCCESS:
      return {
        ...state,
        loading: false
      }

    
    // ERORR
    case CONST.LOAD_USERS_ERROR:
    case CONST.POST_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default: 
      return state;
  }

}

export default reducer;