import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Starting } from "./pages/starting";
import { Main } from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Starting />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
