import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

import "./Join.css";

export default function SignIn() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { title: "Login", content: <Login /> },
    { title: "Sign Up", content: <SignUp /> },
  ];

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer mx-4 bg-gray-100 title-font  text-xl font-medium text-gray-900 mb-3">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            className={`${
              selectedTab === index
                ? "bg-white text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            } py-2 px-4 font-medium`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </button>
        ))}
      <div className="p-4">{tabs[selectedTab].content}</div>
      </div>
    </div>

    // <div className="joinOuterContainer">
    //   <div className="joinInnerContainer">
    //     <h1 className="heading">Join</h1>
    //     <div>
    //       <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
    //     </div>
    //     <div>
    //       <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
    //     </div>
    //     <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
    //       <button className={'button mt-20'} type="submit">Sign In</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
