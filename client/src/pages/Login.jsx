import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <section className="flex bg-gray-800 rounded-lg shadow-md max-w-md p-4">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-blue-600 pb-1.5">Welcome back</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full py-2 px-3 bg-gray-600 rounded border"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full py-2 px-3 bg-gray-600 rounded border"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-white pb-4">Har du ikke en konto <NavLink to="" className="no-underline text-blue-600 font-semibold">Sign up</NavLink></div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 px-3 rounded font-semibold"
                onClick={handleLogin}
              >
                Log In
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
