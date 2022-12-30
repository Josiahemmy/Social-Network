import React from "react";
import { useFirebase } from "react-redux-firebase";

function Login() {
  const firebase = useFirebase();

  const handleLogin = (provider) => {
    firebase.login({ provider });
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      <button
        onClick={() => handleLogin("facebook")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        Log in with Facebook
      </button>
      <button
        onClick={() => handleLogin("google")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Log in with Google
      </button>
    </div>
  );
}

export default Login;
