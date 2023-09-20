import "./App.css";
import { Navbar } from "./Component/Navbar";
import { lazy, Suspense } from "react";

import Footer from "./Component/Footer";
import Contextapi from "./Component/Contextapi/Contextapi";

const Lazyloading = lazy(() => import("./Component/Routes/Routercompo"));

function App() {
  return (
    <div className="App">
      <Navbar />

      <Contextapi>
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
      </Contextapi>
      <Footer />
    </div>
  );
}

export default App;
