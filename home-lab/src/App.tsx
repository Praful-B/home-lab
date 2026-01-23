import { Routes, Route } from "react-router-dom";

import Home from "../src/features/home/pages/Home";
import PhysicsHome from "../src/features/home/pages/PhysicsHome";
import ChemistryHome from "../src/features/home/pages/ChemistryHome";
import AcidValueExperiment from "./features/chemistry/pages/AcidValueExperiment.tsx";
import HardnessExperiment from "./features/chemistry/pages/HardnessExperiment";
import DistillationExperiment from "./features/chemistry/pages/DistillationExperiment";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/physicsHome" element={<PhysicsHome />} />
      <Route path="/chemistryHome" element={<ChemistryHome />} />
        <Route path="/chemistryHome/acid-value" element={<AcidValueExperiment />} />
        <Route path="/chemistryHome/hardness" element={<HardnessExperiment />}/>
        <Route path="/chemistryHome/distillation" element={<DistillationExperiment />} />



    </Routes>
  );
}

export default App;
