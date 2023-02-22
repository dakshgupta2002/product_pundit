import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { rest } from "../common/api";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await rest('POST', 'login', {username: username, password: password})
    if (res.token){
      localStorage.setItem("token", res.token);
      navigate("/")
    }else {
      setUsername("");
      setPassword("");
      window.alert("Login failed. Try again!")
    }
  }
  return (
    <div className="flex flex-col flex-wrap justify-center content-center">
      <div className="w-11/12 max-w-2xl">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
          </span>
          <input
            type="text"
            id="username"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={username}
            onChange={(e)=>{setUsername(e.target.value.trim())}}
            placeholder="USERNAME"
          />
        </div>
      </div>
      <div className="w-11/12 max-w-2xl">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            *
          </span>
          <input
            type="password"
            id="password"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(e)=>{setPassword(e.target.value.trim())}}
            placeholder="PASSWORD"
          />
        </div>
      </div>
      <br />

      <button class="w-11/12 max-w-2xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleLogin}>
        Login/Signup
      </button>
    </div>
  );
};
