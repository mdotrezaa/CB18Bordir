import axios from "axios";

export default axios.create({
  baseURL: `http://apibcd.brocyber.com/api/v1/`,
});

export const getAPI = (url, headers) => {
  return axios
    .get(url, headers)
    .then((res) => {
      const data = res.data.data;
      return data;
    })
    .catch((err) => console.log(err));
};

export const postApi = (url, data, headers) => {
  return axios
    .post(url, data, headers)
    .then((res) => {
      const data = res.data.data;
      return data;
    })
    .catch((err) => console.log(err));
};

export const putApi = (url, data, headers) => {
  return axios
    .put(url, data, headers)
    .then((res) => {
      const data = res.data.data;
      return data;
    })
    .catch((err) => console.log(err));
};
