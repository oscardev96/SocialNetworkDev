import {GET_USER_SUCCESS, CREATE_PROFILE_SUCCES} from '../type';
const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, users: action.data};
    case CREATE_PROFILE_SUCCES:
      return {...state, users: action.data};
    default:
      return state;
  }
};
