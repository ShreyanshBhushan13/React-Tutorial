import { LOGO_URL } from "../utlis/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //let btnName="Login"
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);
console.log(loggedInUser);

// SELECTOR IS A HOOK
// SUBSRCIBING  TO THE STORE USING USESELECTOR
const cartItems =useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
      <div>
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold">Online Status:{onlineStatus?"✅":"🔴"}</li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>{" "}
          </li>

          <li className="px-4 font-bold">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold"> 
           <Link to="/grocery">Grocery</Link>
          </li>
          <li  className="px-4 font-bold"><Link to="/cart">Cart🛒-({cartItems.length}items)</Link></li>
          <button
            className="login font-bold"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
