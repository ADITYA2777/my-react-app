import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);

  const handlerValdationBtn = () => {
    
  }

  const toggleSignInFrom = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background pages"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-xl">
        <h1 className="text-3xl font-bold py-4">
          {isSignInFrom ? "Sign IN" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            className="p-2 my-4 text-white w-full  bg-gray-700"
            placeholder="Enter your Name"
          />
        )}
        <input
          type="text"
          className="p-2 my-4 text-white w-full  bg-gray-700"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="p-2 my-4 text-white w-full bg-gray-700"
          placeholder="Password"
        />
        <button className="p-2 my-6 bg-red-500 w-full rounded-xl" onChange={handlerValdationBtn}>
          {isSignInFrom ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>
          {isSignInFrom
            ? " New to Netflix ? Sign up now"
            : "Already registered ? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
