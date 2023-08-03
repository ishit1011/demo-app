import "./App.css";
import Homepage from "./components/Homepage";
import Welcome from "./components/Welcome";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>

          <Route element={<Welcome/>} path='/' exact />
          <Route element={<Homepage/>} path='/homepage' exact />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
