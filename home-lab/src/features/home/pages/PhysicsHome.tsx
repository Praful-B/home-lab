import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function PhysicsHome() {
  return (
    <>
      <NavBar currentPage="PhysicsHome" />

      <div className="flex justify-center">
        <div className="flex justify-center">
          <DefaultExperimentButton
            text="Ohms-law"
            b_type="rectangle"
            to="/physicsHome/ohms-law"
          />
          <DefaultExperimentButton
            text="Magnetism around north and south poles"
            b_type="rectangle"
            to="/physicsHome/Magnetism"
          />
        </div>
      </div>
    </>
  );
}

export default PhysicsHome;
