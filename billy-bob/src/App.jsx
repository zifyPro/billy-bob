import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Store from "./views/store/store";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
