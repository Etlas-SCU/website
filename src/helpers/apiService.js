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
    var response = await fetch(`${url}/${endpoint}`, {
      method: "Post",
      headers: getHeaders(),
      body: body,
    });

    var responseBody = null;

    if (response.status !== 204) {
      responseBody = await response.json();
    }
    if (response.ok) {
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
