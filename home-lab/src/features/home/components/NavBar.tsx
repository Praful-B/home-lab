// import { useState } from "react";
import type NavBarProps from "../../../types/NavBarProps";
import HamburgerButton from "./HamburgerButton";

export default function NavBar(props: NavBarProps) {
  // const [currentMenu, setCurrentMenu] = useState("home");
  const currentPage = props.currentPage;

  type PageKey = "Home" | "PhysicsHome" | "ChemistryHome";
  const currentPageTitle: Record<PageKey, string> = {
    Home: "Home Science Lab",
    PhysicsHome: "Physics Lab",
    ChemistryHome: "Chemistry Lab",
  };

  return (
    <>
      <nav className="flex items-center justify-between gap-4">
        <HamburgerButton></HamburgerButton>
        <div>
          <h1 className="text-4xl font-semibold tracking-wide text-center">
            {currentPageTitle[currentPage]}
          </h1>
        </div>
        <div>
          <input type="text" placeholder="Search"></input>
        </div>
      </nav>
    </>
  );
}
