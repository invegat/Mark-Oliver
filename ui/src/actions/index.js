import axios from 'axios';

export const GET_GS = 'GET_GS';
export const GET_ERROR = 'GET_ERROR';

/* eslint-disable no-console, semi-style */

axios.defaults.withCredentials = false;

// export const ROOT_URL =
//   (process.env.NODE_ENV === 'production') ?
//   'https://climate-hack-winter-2019.herokuapp.com/api'
//     : 'http://localhost:5000/api'
//   ;
// export const ROOT_URL = 'climate-hack-winter-2019.herokuapp.com'

const scotland_flag = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
let port, host, http;
if (process.env.NODE_ENV === 'production') {
  port = '';
  host = '';
  http = '';
} else {
  port = 5000;
  host = "localhost:";
  http = 'http://';
}
export const fileError = error => ({
  type: GET_ERROR,
  payload: error,
});

export const post_file = (formData, history) => (dispatch) => {
  axios
    .post(`${http}${host}${port}/api/gs/fileUpload`, formData)
    .then((response) => {
      dispatch({
        type: GET_GS,
        payload: response.data
      });

    })
    .catch((err) => {
      dispatch(fileError("failed to upload file"))
    });
};

