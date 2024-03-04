import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Store from "./views/store/store";
import Menus from "./components/menu/menu";
// import Navbar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/divxrmzge/image/upload/v1708176856/ojmk9i0nuuov2f2ahtke.jpg')] bg-cover bg-center">
      {/* <Navbar /> */}
      <Menus />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
