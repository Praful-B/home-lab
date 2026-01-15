import { commonChemistryExperiments } from "../../../assets/data/commonChemistryExperiments";
import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function ChemistryHome() {
  return (
    <>
      <div>
        <NavBar currentPage="ChemistryHome" />
      </div>
      <div className="flex">
        <div>
          {commonChemistryExperiments.map((exp) => (
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

export default ChemistryHome;
