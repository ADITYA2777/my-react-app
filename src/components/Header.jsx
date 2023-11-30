import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navgaite = useNavigate();
    const user = useSelector((store) => store.user);
  const handlerSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        navgaite("/");
      })
      .catch((error) => {
        // An error happened.
        navgaite("/error");
      });
  };
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-r from-black w-screen z-10 flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center">
          <img className="w-10 h-10"src={user?.photoURL} alt="iconUser" />
          <button
            onClick={handlerSignOutBtn}
            className="p-4 m-4 bg-purple-500 text-white rounded-lg text-xl hover:bg-black
           hover:text-red-700"
          >
            sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
