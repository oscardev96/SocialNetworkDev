import {GET_ALL_POST_SUCCESS, POST_SUCCESS} from '../type';
const initialState = {
  listPost: [],
};

export default (state = initialState, acction) => {
  switch (acction.type) {
    case GET_ALL_POST_SUCCESS:
      return {...state, listPost: acction.data};
    case POST_SUCCESS:
      return {...state, listPost: acction.data};
    default:
      return state;
  }
};
