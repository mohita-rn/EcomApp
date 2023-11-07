const baseURL = "https://dummyjson.com/products"; // Replace with your API base URL

// Helper function to make a GET request
export const getItems = async (data) => {
  try {
    const response = await fetch(!data ? `${baseURL}` : `${baseURL}/data`);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// You can define other functions for different types of requests (POST, PUT, DELETE) and specific endpoints as needed.
