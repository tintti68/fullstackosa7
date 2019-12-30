import loginService from '../services/login'

const loginReducer = (state=null, action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return action.data
  case 'SET_USER':
    return action.data
  default:
    return state
  }
}

export const login = data => {
  return async dispatch => {
    const user = await loginService.login(data)
    dispatch({
      type: 'LOGIN',
      data: user
    })
    return user
  }
}


export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
      data: null
    })
  }
}

export const setUser = user => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}
export default loginReducer