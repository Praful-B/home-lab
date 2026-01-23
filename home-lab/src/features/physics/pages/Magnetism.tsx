import { useState } from "react";

/** =========================
 *  THEME (same as Ohm's Law)
 *  ========================= */
const THEME = {
  ORANGE: "#E2A16F",
  CREAM: "#FFF0DD",
  GRAY: "#D1D3D4",
  BLUE: "#86B0BD",
};

/** =========================
 *  COMMON UI COMPONENTS
 *  ========================= */

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border rounded-lg p-4 mb-6"
      style={{ backgroundColor: "white", borderColor: "#555" }}
    >
      <h2 className="text-xl font-bold mb-2" style={{ color: THEME.ORANGE }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border rounded-lg p-4"
      style={{ backgroundColor: THEME.GRAY, borderColor: "#555" }}
    >
      <h2 className="text-xl font-bold mb-3 text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

/** =========================
 *  MAGNET VISUAL
 *  ========================= */

function MagnetField({
  strength,
  showField,
}: {
  strength: number;
  showField: boolean;
}) {
  return (
    <div
      className="relative h-[260px] rounded-lg"
      style={{
        backgroundColor: THEME.CREAM,
        border: `2px solid ${THEME.BLUE}`,
      }}
    >
      {/* Magnet */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex">
        <div
          className="w-[90px] h-[50px] flex items-center justify-center font-bold text-white"
          style={{ backgroundColor: "#C0392B" }}
        >
          N
        </div>
        <div
          className="w-[90px] h-[50px] flex items-center justify-center font-bold text-white"
          style={{ backgroundColor: "#2980B9" }}
        >
          S
        </div>
      </div>

      {/* Field lines / iron filings */}
      {showField && (
        <div
          className="absolute inset-0 flex items-center justify-center text-sm font-semibold"
          style={{ opacity: strength / 100 }}
        >
          <p className="text-gray-800">
            Iron filings align along magnetic field lines
          </p>
        </div>
      )}
    </div>
  );
}

/** =========================
 *  MAIN COMPONENT
 *  ========================= */

export default function Magnetism() {
  const [strength, setStrength] = useState(50);
  const [showField, setShowField] = useState(true);

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: THEME.CREAM }}>
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h1 className="text-3xl font-extrabold mb-5 text-gray-900">
          Experiment: Magnetic Field Around a Bar Magnet
        </h1>

        {/* AIM */}
        <SectionCard title="Aim">
          <p className="text-gray-800">
            To study the pattern of magnetic field lines around a bar magnet
            using iron filings.
          </p>
        </SectionCard>

        {/* APPARATUS */}
        <SectionCard title="Apparatus Required">
          <ul className="list-disc ml-6 text-gray-800">
            <li>Bar Magnet</li>
            <li>Iron filings</li>
            <li>White sheet of paper</li>
          </ul>
        </SectionCard>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Magnet Panel */}
          <Panel title="Magnetic Field Visualization">
            <MagnetField strength={strength} showField={showField} />

            <p className="mt-3 text-sm font-semibold text-gray-700">
              Field strength: {strength}%
            </p>
          </Panel>

          {/* Controls */}
          <Panel title="Controls">
            <div
              className="rounded-lg p-4 mb-4"
              style={{
                backgroundColor: THEME.CREAM,
                border: `2px solid ${THEME.BLUE}`,
              }}
            >
              <p className="font-bold text-gray-800 mb-2">
                Magnetic Field Strength
              </p>
              <input
                type="range"
                min={10}
                max={100}
                value={strength}
                onChange={(e) => setStrength(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <button
              onClick={() => setShowField(!showField)}
              className="px-4 py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: THEME.BLUE }}
            >
              {showField ? "Hide Field Lines" : "Show Field Lines"}
            </button>
          </Panel>
        </div>

        {/* PROCEDURE */}
        <SectionCard title="Procedure">
          <ol className="list-decimal ml-6 text-gray-800">
            <li>Place a bar magnet on a flat surface.</li>
            <li>Spread iron filings uniformly around the magnet.</li>
            <li>Tap the surface gently.</li>
            <li>Observe the pattern formed by the iron filings.</li>
          </ol>
        </SectionCard>

        {/* OBSERVATION */}
        <SectionCard title="Observation & Result">
          <p className="text-gray-800">
            Iron filings form closed curves around the magnet, showing that
            magnetic field lines emerge from the North pole and enter the South
            pole.
          </p>

          <p className="mt-3 font-bold text-gray-900">
            Result: Magnetic field lines are denser near the poles, indicating
            stronger magnetic force.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
