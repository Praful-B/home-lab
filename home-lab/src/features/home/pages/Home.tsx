import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar currentPage="Home"></NavBar>
      <div className="flex items-center justify-start">
        <DefaultExperimentButton
          text="Physics"
          to="/physicsHome"
          b_type="b_square"
        />
        <DefaultExperimentButton
          text="Chemisty"
          to="/chemistryHome"
          b_type="b_square"
        />
      </div>

      <footer>
        <h1>Footer Will be implemented later</h1>
      </footer>
    </>
  );
}

export default Home;
