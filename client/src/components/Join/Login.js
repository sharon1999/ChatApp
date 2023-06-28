import "./Join.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [room, setRoom] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    // <div className="joinOuterContainer">
    //   <div className="joinInnerContainer">
    //     <h1 className="heading text-black">Login</h1>
    //     <div>
    //       <input
    //         placeholder="Name"
    //         className="joinInput"
    //         type="text"
    //         onChange={(event) => setName(event.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <input
    //         placeholder="Room"
    //         className="joinInput mt-20"
    //         type="text"
    //         onChange={(event) => setRoom(event.target.value)}
    //       />
    //     </div>
    //     <Link
    //       onClick={(e) => (!name || !room ? e.preventDefault() : null)}
    //       to={`/chat?name=${name}&room=${room}`}
    //     >
    //       <button className={"button mt-20"} type="submit">
    //         Sign In
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          id="name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
      </div>
      <Button colorScheme='blue'>Button</Button>

      {/* <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="flex">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          <button className="text-gray-500 hover:text-gray-700">
            Show
          </button>
        </div>
      </div> */}
      <div className="relative my-8">
        <input
          type={showPassword ? "text" : "password"}
          className="py-2 px-4 border border-gray-400 rounded-md w-full"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={(e) => {
            e.preventDefault();
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </button>
      </div>
      <button
        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit"
      >
        Login
      </button>

    
    </form>
  );
}

export default Login;
