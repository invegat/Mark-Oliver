import axios from 'axios';

export const GET_GS = 'GET_GS';
export const GET_ERROR = 'GET_ERROR';
export const POST_GS = 'POST_GS'

/* eslint-disable no-console, semi-style */

axios.defaults.withCredentials = true;

// export const ROOT_URL =
//   (process.env.NODE_ENV === 'production') ?
//   'https://climate-hack-winter-2019.herokuapp.com/api'
//     : 'http://localhost:5000/api'
//   ;
// export const ROOT_URL = 'climate-hack-winter-2019.herokuapp.com'

// const scotland_flag = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
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
  console.log('post_file formData', JSON.stringify(formData))
  console.log('history.action', history.action)
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

let GSTarget = null

export const getGSMS = () => dispatch => {
  axios
    .get(`${http}${host}${port}/api/gs/target`)
    .then((response) => {
      GSTarget = response.data
    })
    .catch((err) => {
      dispatch(fileError('failed to GS target'))
    })
}

export const postGS = (iarray, history) => (dispatch) => {
  console.log('post_file formData', JSON.stringify(iarray))
  console.log('history.action', history.action)
  axios
    .post(`${GSTarget}`, iarray)
    .then((response) => {
      dispatch({
        type: POST_GS,
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch(fileError('failed to parse GS input file'))
    });
}

