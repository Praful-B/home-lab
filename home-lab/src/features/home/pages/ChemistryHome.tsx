import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function ChemistryHome() {
  return (
    <>
      <NavBar currentPage="ChemistryHome" />
      <DefaultExperimentButton
        text="Acid Value Caliculation"
        to="/chemistryHome/acid-value"
        b_type="rectangle"
      ></DefaultExperimentButton>
      <DefaultExperimentButton
        text="Hardness of Water"
        to="/chemistryHome/HardnessExperiment"
        b_type="rectangle"
      ></DefaultExperimentButton>
    </>
  );
}

export default ChemistryHome;
