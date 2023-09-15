// import React from "react";
// import { createContext } from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// export const Contextdata = createContext();
// const URL = "http://localhost:5000/home";
// function Contextapi({childern}) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get(URL)
//     .then((response)=>setData(response.data))
//     .catch((error)=>console.log(error))
//   }, []);
//   console.log(data)
//   return (
//     <>
//       {data && (
//         <Contextdata.Provider value={data}>
//           {childern} 
//         </Contextdata.Provider>
//       )}
//     </>
//   );
// }

// export default Contextapi;


import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Contextdata = createContext();
const URL = "http://localhost:5000/home";

function Contextapi({children}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL)
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
