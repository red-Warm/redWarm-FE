import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Starting } from "./pages/starting";
import { Options } from "./pages/options";
import { Graph } from "./pages/graph";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Starting />} />
        <Route path="/options" element={<Options />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
