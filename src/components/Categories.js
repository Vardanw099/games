import axios from "axios";
import React, { useEffect, useState } from "react";
import { instance } from "../api";

function Categories({ toUp }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(`/games`);
      console.log(response.data);
      const categories = response.data.map((game) => game.genre.trim(" "));
      const setfiltered = Array.from(new Set(categories));
      console.log(setfiltered);
      setData(setfiltered.sort());
    };

    fetchData();

    // let filtered = [];
    // data.forEach((item) => {
    //   filtered.push(item.genre);
    // });

    // let setfiltered = new Set(filtered);
    // setfiltered = Array;
  }, []);

  const category = (item) => {
    toUp(item);
  };

  return (
    <div className="col-md-2 categories">
      <ul>
        <li onClick={() => category("All")}>All</li>

        {data.map((item, index) => (
          <li onClick={() => category(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
