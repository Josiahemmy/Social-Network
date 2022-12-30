import React, { useState } from "react";

import { signUp } from "../actions";
import { useDispatch } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const [provider, setProvider] = useState("");

  const handleClick = (provider) => {
    setProvider(provider);
    dispatch(signUp(provider));
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
        onClick={() => handleClick("google")}
      >
        <i className="fab fa-google fa-lg mr-2" />
        Sign up with Google
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
        onClick={() => handleClick("facebook")}
      >
        <i className="fab fa-facebook-f fa-lg mr-2" />
        Sign up with Facebook
      </button>
    </div>
  );
}

export default SignUp;
