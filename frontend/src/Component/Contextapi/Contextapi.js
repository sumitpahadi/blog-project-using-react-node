
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Contextdata = createContext();
const url = "https://node-blog-ahyt.onrender.com/home";

function Contextapi({children}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Contextdata.Provider value={data}>
      {children}
    </Contextdata.Provider>
  );
}

export default Contextapi;
