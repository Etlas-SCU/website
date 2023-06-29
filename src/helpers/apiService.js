import axios from 'axios';

const url = "http://20.19.184.149:8000";

function getHeaders() {
  var access = localStorage.getItem("access");
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: access ? `Bearer ${access}` : null,
  };
}

export async function Post(endpoint, body) {
  try {
    const response = await axios.post(`${url}/${endpoint}`, body, {
      headers: getHeaders(),
    });

    var responseBody = null;
    if (response.status !== 204) {
      responseBody = response.data;
    }
    if (response.status>=200 && response.status<300) {
      return {
        isError: false,
        body: responseBody,
      };
    } else {
      return {
        isError: true,
        body: responseBody,
      };
    }
  } catch (error) {
    return {
      isError: true,
      body: error,
    };
  }
}

export async function Patch(endpoint, body) {
  try {
    const response = await axios.patch(`${url}/${endpoint}`, body, {
      headers: getHeaders(),
    });

    var responseBody = null;
    if (response.status !== 204) {
      responseBody = response.data;
    }
    if (response.status>=200 && response.status<300) {
      return {
        isError: false,
        body: responseBody,
      };
    } else {
      return {
        isError: true,
        body: responseBody,
      };
    }
  } catch (error) {
    return {
      isError: true,
      body: error,
    };
  }
}