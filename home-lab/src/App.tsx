import { Routes, Route } from "react-router-dom";

import Home from "../src/features/home/pages/Home";
import PhysicsHome from "../src/features/home/pages/PhysicsHome";
import ChemistryHome from "../src/features/home/pages/ChemistryHome";

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
