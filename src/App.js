import HaveQues from "./Components/HaveQues";
import Nav from "./Components/Nav";
import Popup from "./Components/Popup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/HaveQues" element={<HaveQues />} />
      <Route path="/Popup" element={<Popup />} />
    </Routes>
  );
}

export default App;
