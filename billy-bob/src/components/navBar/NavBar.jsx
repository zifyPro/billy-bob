import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menus from "../menu/menu";

const Navbar = () => {
  



  return (
    <>
      <div className="flex flex- justify-around items-center pt-6 bg-custom-gray rounded-md mx-auto mt-3  w-11/12 h-12 md:w-2/4">
        <div className="flex items-center -ml-10 -mt-6">
         
        </div>

        <div className="-mt-6 -mr-10">
          <Menus />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img className="w-3/6 md:w-1/6 " src="/logo.png" alt="logo billiebob" />
      </div>

    </>
  );
};
export default Navbar;
