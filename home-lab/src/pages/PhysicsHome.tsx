import { commonPhysicsExperiments } from "../assets/data/commonPhysicsExperiments";
import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function PhysicsHome() {
  return (
    <>
      <NavBar currentPage="PhysicsHome" />
      {commonPhysicsExperiments.map((exp) => (
        <DefaultExperimentButton text={exp.name} b_type="rectangle" to="/" />
      ))}
    </>
  );
}

export default PhysicsHome;
