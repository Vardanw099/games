import axios from "axios";

export const instance = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Key": "2f108f491bmshfccd8a3f41a787fp177cecjsnf900b7d7273d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});
