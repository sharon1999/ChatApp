import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat location={location}/>} />
      </Routes>
    </div>
  );
}

export default App;
