import { Routes, Route } from "react-router-dom";

import Home from "../src/features/home/pages/Home";
import PhysicsHome from "../src/features/home/pages/PhysicsHome";
import ChemistryHome from "../src/features/home/pages/ChemistryHome";
import AcidValueExperiment from "./features/chemistry/pages/AcidValueExperiment.tsx";
import HardnessExperiment from "./features/chemistry/pages/HardnessExperiment";

import OhmsLaw from "../src/features/physics/pages/OhmsLaw";
<<<<<<< HEAD
import Magnetism from "../src/features/physics/pages/Magnetism.tsx";
=======
import ProjectileMotion from "../src/features/physics/pages/ProjectileMotion";
>>>>>>> c4c58b8d30458ac2e2354c4fea5d111e6bfa4230

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/physicsHome" element={<PhysicsHome />} />
      <Route path="/physicsHome/ohms-law" element={<OhmsLaw />} />
      <Route path="/physicsHome/Magnetism" element={<Magnetism />} />

      <Route path="/chemistryHome" element={<ChemistryHome />} />
      <Route
        path="/chemistryHome/acid-value"
        element={<AcidValueExperiment />}
      />
      <Route
        path="/chemistryHome/HardnessExperiment"
        element={<HardnessExperiment />}
      />
      <Route path="/physicsHome/projectile-motion" element={<ProjectileMotion />} />

    </Routes>
    
  );
}

export default App;
