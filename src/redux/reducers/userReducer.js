import {
  GET_USER_SUCCESS,
  CREATE_PROFILE_SUCCES,
  GET_ALL_PROFILE_SUCCES,
} from '../type';
const initialState = {
  users: [],
  listProfile: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, users: action.data};
    case CREATE_PROFILE_SUCCES:
      return {...state, users: action.data};
    case GET_ALL_PROFILE_SUCCES:
      return {...state, listProfile: action.data};
    default:
      return state;
  }
};
