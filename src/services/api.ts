import axios from "axios";

export const getProtectedData = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get("http://localhost:4000/protected", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
