import { Routes, Route } from "react-router-dom";

import Home from "../src/features/home/pages/Home";
import PhysicsHome from "../src/features/home/pages/PhysicsHome";
import ChemistryHome from "../src/features/home/pages/ChemistryHome";
import AcidValueExperiment from "./features/chemistry/pages/AcidValueExperiment.tsx";
import HardnessExperiment from "./features/chemistry/pages/HardnessExperiment";

import OhmsLaw from "../src/features/physics/pages/OhmsLaw";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/physicsHome" element={<PhysicsHome />} />
      <Route path="/chemistryHome" element={<ChemistryHome />} />

      <Route path="/physicsHome/ohms-law" element={<OhmsLaw />} />
      <Route
        path="/chemistryHome/acid-value"
        element={<AcidValueExperiment />}
      />
      <Route
        path="/chemistryHome/HardnessExperiment"
        element={<HardnessExperiment />}
      />
    </Routes>
  );
}

export default App;
