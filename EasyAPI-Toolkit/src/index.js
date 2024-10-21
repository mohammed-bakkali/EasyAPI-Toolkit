import axios from "axios";

/**
 * API utility functions to handle HTTP requests using Axios.
 * This file contains functions for GET, POST, PUT, and DELETE requests.
 */

let apiClient; // Variable to save an Axios instance

/**
 * Initialize the Axios instance with the provided base URL.
 *
 * @param {string} apiBaseURL - The base URL for the API.
 */
const initializeAPI = (apiBaseURL) => {
  apiClient = axios.create({
    baseURL: apiBaseURL,
  });
};

/**
 * Fetch data from an API using a GET request.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {object} params - The query parameters to be sent with the request (optional).
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response data from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
const getData = async (endpoint, params, handleError) => {
  try {
    const response = await apiClient.get(endpoint, params);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

/**
 * Fetch data with authorization token.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response data from the API.
 */
const getDataWithToken = async (endpoint, handleError) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authorization token is missing.");
  }

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    timeout: 10000,
  };

  try {
    const response = await apiClient.get(endpoint, config);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

/**
 * Send a POST request with file data using "multipart/form-data" format.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {object} formData - The form data (including files) to be sent in the request.
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response from the API.
 */
const postDataWithFile = async (endpoint, formData, handleError) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authorization token is missing.");
  }

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    timeout: 10000,
  };

  try {
    const response = await apiClient.post(endpoint, formData, config);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

/**
 * Send a POST request to insert data into the API.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {object} data - The data to be sent in the request body.
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response from the API.
 */
const postData = async (endpoint, data, handleError) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authorization token is missing.");
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    timeout: 10000,
  };

  try {
    const response = await apiClient.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

/**
 * Delete data from the API via a DELETE request.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response data from the API.
 */
const deleteData = async (endpoint, handleError) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authorization token is missing.");
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    timeout: 10000,
  };

  try {
    const response = await apiClient.delete(endpoint, config);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

/**
 * Update data with file via a PUT request.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {object} formData - The form data (including files) to be sent in the request.
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response data from the API.
 */
const updateDataWithFile = async (endpoint, formData, handleError) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authorization token is missing.");
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    timeout: 10000,
  };

  try {
    const response = await apiClient.put(endpoint, formData, config);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

/**
 * Update data via a PUT request.
 *
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {object} body - The data to be sent in the request body.
 * @param {function} handleError - Custom error handling function (optional).
 * @returns {object} - The response data from the API.
 */
const updateData = async (endpoint, body, handleError) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Authorization token is missing.");
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    timeout: 10000,
  };

  try {
    const response = await apiClient.put(endpoint, body, config);
    return response.data;
  } catch (error) {
    if (handleError) {
      handleError(error);
    }
    throw error;
  }
};

// Export the functions for use in other parts of the application
export {
  initializeAPI,
  getData,
  getDataWithToken,
  postData,
  postDataWithFile,
  deleteData,
  updateDataWithFile,
  updateData,
};
