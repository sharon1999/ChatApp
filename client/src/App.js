import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const location = useLocation();
  return (
    <ChakraProvider>
      <div className="App ">
        <h1 className=" p-10 sm:p-3   inline-block rounded-md m-10 text-5xl  sm:text-xl mx-auto bg-white  title-font   text-gray-900">
          Chat App
        </h1>
        <Routes>
          <Route path="/" exact element={<Join />} />
          <Route path="/chat" element={<Chat location={location} />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
