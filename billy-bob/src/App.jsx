import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Store from "./views/store/store";
import Navbar from "./components/navBar/NavBar";
import NewProductPuntos from "./views/storePuntos/storePuntos";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

function App() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/divxrmzge/image/upload/v1708176856/ojmk9i0nuuov2f2ahtke.jpg')] bg-cover bg-center">
      {/* <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storePuntos" element={<NewProductPuntos />} />
      </Routes>
    </div>
  );
}

export default App;
