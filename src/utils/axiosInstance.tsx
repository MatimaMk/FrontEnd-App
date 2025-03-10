import axios from "axios";

export const getAxiosInstace = () =>
  axios.create({
    baseURL: `${'https://body-vault-server-b9ede5286d4c.herokuapp.com'}`,
    headers: {
      "Content-Type": "application/json",
    },
  });