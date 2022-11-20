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
    case CONST.DELETE_USER_START:
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
    case CONST.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== payload)
      }
    
    // ERORR
    case CONST.LOAD_USERS_ERROR:
    case CONST.POST_USER_ERROR:
    case CONST.DELETE_USER_ERROR:
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