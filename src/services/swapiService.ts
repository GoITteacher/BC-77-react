import axios from "axios";

export const fetchPerson = async (id: number) => {
  const response = await axios.get(`https://swapi.info/api/people/${id}`);
  return response.data;
};
