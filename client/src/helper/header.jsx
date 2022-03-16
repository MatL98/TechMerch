import Axios from "axios";
export const initAxiosHeader = () => {
  Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
		const tokenParse = JSON.parse(token)

    if (token) {
      config.headers.Authorization = `Bearer ${tokenParse}`;
    }
		return config
  });

  Axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );
};
