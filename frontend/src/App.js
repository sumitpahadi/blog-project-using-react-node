import { lazy, Suspense } from "react";

import Routercompo from "./Component/Routes/Routercompo";
const Lazyloading = lazy(() => import("./Component/Contextapi/Contextapi"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <h1 style={{ color: "red", fontSize: "40px" }}>Loading...</h1>
          </div>
        }
      >
        <Lazyloading />
      </Suspense>
      <Routercompo></Routercompo>

    </div>
  );
}

export default App;
