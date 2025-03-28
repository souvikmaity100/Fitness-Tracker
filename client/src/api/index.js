import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/",
});

const userSignUp = async (data) => API.post("/user/signup", data);
const userSignIn = async (data) => API.post("/user/signin", data);

const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export { userSignUp, userSignIn, getDashboardDetails, getWorkouts, addWorkout };
