import { lazy, Suspense } from "react";

const Lazyloading = lazy(() => import("./Component/Routes/Routercompo"));

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
    </div>
  );
}

export default App;
