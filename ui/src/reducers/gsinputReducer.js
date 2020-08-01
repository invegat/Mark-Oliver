import {
  GET_GS
} from '../actions';

export default (gsinput = {}, action) => {
  switch (action.type) {
    case GET_GS:
      return action.payload;
    default:
      return gsinput;
  }
};

