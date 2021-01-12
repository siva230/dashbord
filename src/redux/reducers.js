import {LOGIN,LOGOUT} from './actiontypes'

const intialState = {
isLogin :false
}

const loginReducer = (state=intialState,action) => {
  switch(action.type){
    case LOGIN : return {
      ...state,
    }
    case LOGOUT : return {
      ...state,
    }
    default: return state
  }
}
export default loginReducer