import { commonPhysicsExperiments } from "../assets/data/commonPhysicsExperiments";
import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function PhysicsHome() {
  return (
    <>
      <div>
        <NavBar currentPage="PhysicsHome" />
      </div>
      <div className="flex">
        <div>
          {commonPhysicsExperiments.map((exp) => (
            <DefaultExperimentButton
              text={exp.name}
              b_type="rectangle"
              to="/"
            />
          ))}
        </div>
        <div>
          <DefaultExperimentButton
            b_type="b_square"
            to="/"
            text="Advanced SandBox"
          />
        </div>
      </div>
    </>
  );
}

export default PhysicsHome;
