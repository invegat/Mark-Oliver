import {
  POST_GS
} from '../actions';

export default (gsoutput = [], action) => {
  switch (action.type) {
    case POST_GS:
      return action.payload;
    default:
      return gsoutput;
  }
};

