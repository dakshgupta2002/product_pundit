import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pb } from "../utils/pocketbase";


export interface AuthLogin {
  record: Record;
  token: string;
}

export interface Record {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: Date;
  username: string;
  verified: boolean;
}

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // await pb.collection("users").create(username, password);

    if (pb.authStore.isValid) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center ">
        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
          SIGNUP
        </h1>

        <div className="w-3/4 mb-6">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="User Name"
            onChange={(e) => {
              setUsername(e.target.value.trim());
            }}
          />
        </div>

        <div className="w-3/4 mb-6">
          <input
            type="password"
            name="password"
            id="password"
            className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 text-black"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value.trim());
            }}
          />
        </div>

        <div className="w-3/4 mt-4">
          <button
            type="submit"
            onClick={handleLogin}
            className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
          >
            {" "}
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
}
