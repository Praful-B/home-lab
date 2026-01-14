import DefaultExperimentButton from "../components/DefaultExpeimentButton";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar currentPage="Home"></NavBar>
      <div className="py-10 px-2">
        <DefaultExperimentButton
          text="Physics"
          b_type="b_square"
        ></DefaultExperimentButton>
        <DefaultExperimentButton
          text="Chemisty"
          b_type="b_square"
        ></DefaultExperimentButton>
      </div>

      <footer>
        <h1>Footer Text Will be implemented later</h1>
      </footer>
    </>
  );
}

export default Home;
