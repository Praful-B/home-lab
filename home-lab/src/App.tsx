import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PhysicsHome from "./pages/PhysicsHome";
import ChemistryHome from "./pages/ChemistryHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/physicsHome" element={<PhysicsHome />} />
      <Route path="/chemistryHome" element={<ChemistryHome />} />
    </Routes>
  );
}

export default App;
