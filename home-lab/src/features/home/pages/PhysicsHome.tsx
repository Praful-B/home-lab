import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function PhysicsHome() {
  return (
    <>
      <NavBar currentPage="PhysicsHome" />

      <div className="flex justify-center">
        <DefaultExperimentButton
          text="Ohms-law"
          b_type="rectangle"
          to="/physicsHome/ohms-law"
        />
      </div>
    </>
  );
}

export default PhysicsHome;
