import React from "react"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex content-center justify-between flex-wrap h-20 w-screen bg-stone-900">
            <img className="h-3/5 py-1 mx-3" src="gokwik.png" alt="Logo"></img>
            <button className="mx-3 px-4 white font-semibold bg-cyan-800 text-white text-lg" onClick={() => {
                localStorage.setItem("token", 'null');
                navigate("login");
            }}>
                Logout
            </button>
        </div>
    )
}