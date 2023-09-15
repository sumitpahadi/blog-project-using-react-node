import Routercompo from "./Component/Routes/Routercompo";
import "./App.css";
import { Navbar } from "./Component/Navbar";

import Footer from "./Component/Footer";
import Contextapi from "./Component/Contextapi/Contextapi";


function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Contextapi >
      <Routercompo/>
        
      </Contextapi>
      <Footer/>
    </div>
  );
}

export default App;
