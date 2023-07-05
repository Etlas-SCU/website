import axios from 'axios';

const url = "https://api.etlas.tech";

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
    var expiryDate = localStorage.getItem("tokenExpiry")
    if (endpoint != "auth/token/refresh/" && (expiryDate != null && expiryDate <= Date.now())) {
      var result = await refreshTokens()
      if (result.isError) {
        return result
      }
    }
    const response = await axios.post(`${url}/${endpoint}`, body, {
      headers: getHeaders(),
    });

    var responseBody = null;

    if (response.status !== 204) {
      responseBody = response.data;
    }

    if (response.status >= 200 && response.status < 300) {
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

export async function Put(endpoint, body) {
  try {
    var expiryDate = localStorage.getItem("tokenExpiry")
    if (expiryDate != null && expiryDate <= Date.now()) {
      var result = await refreshTokens()
      if (result.isError) {
        return result
      }
    }

    const response = await axios.put(`${url}/${endpoint}`, body, {
      headers: getHeaders(),
    });

    var responseBody = null;

    if (response.status !== 204) {
      responseBody = response.data;
    }

    if (response.status >= 200 && response.status < 300) {
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
    var expiryDate = localStorage.getItem("tokenExpiry")
    if (expiryDate != null && expiryDate <= Date.now()) {
      var result = await refreshTokens()
      if (result.isError) {
        return result
      }
    }

    const response = await axios.patch(`${url}/${endpoint}`, body, {
      headers: getHeaders(),
    });

    var responseBody = null;

    if (response.status !== 204) {
      responseBody = response.data;
    }

    if (response.status >= 200 && response.status < 300) {
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

export async function GET(endpoint) {
  try {
    var expiryDate = localStorage.getItem("tokenExpiry")
    if (expiryDate != null && expiryDate <= Date.now()) {
      var result = await refreshTokens()
      if (result.isError) {
        return result
      }
    }

    const response = await axios.get(`${url}/${endpoint}`, {
      headers: getHeaders(),
    });

    var responseBody = null;

    if (response.status !== 204) {
      responseBody = response.data;
    }

    if (response.status >= 200 && response.status < 300) {
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

export async function DELETE(endpoint, body) {
  try {
    var expiryDate = localStorage.getItem("tokenExpiry")
    if (expiryDate != null && expiryDate <= Date.now()) {
      var result = await refreshTokens()
      if (result.isError) {
        return result
      }
    }

    const response = await axios.delete(`${url}/${endpoint}`, body, {
      headers: getHeaders(),
    });

    var responseBody = null;

    if (response.status !== 204) {
      responseBody = response.data;
    }

    if (response.status >= 200 && response.status < 300) {
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

async function refreshTokens() {
  var refresh = localStorage.getItem("refresh");
  const result = await Post("auth/token/refresh/", JSON.stringify({ refresh: refresh }));

  if (!result.isError) {
    localStorage.setItem("access", result.body.access);
    localStorage.setItem("refresh", result.body.refresh);
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (3 * 60 * 1000));
    localStorage.setItem("tokenExpiry", expiryDate.getTime());
  } else {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("tokenExpiry");
  }
  return result
}