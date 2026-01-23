import { useMemo, useState } from "react";

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

function ValueBox({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-lg p-3 text-center bg-white/40">
      <p className="text-sm font-semibold text-gray-700">{label}</p>
      <p className="text-lg font-bold" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

/** =========================
 *  MAGNET FIELD SVG
 *  ========================= */

function MagnetFieldLines({
  showLines,
  strength,
}: {
  showLines: boolean;
  strength: number;
}) {
  // strength => affects opacity and thickness
  const opacity = useMemo(() => 0.2 + strength / 120, [strength]);
  const strokeW = useMemo(() => 1 + strength / 50, [strength]);

  return (
    <div
      className="rounded-lg p-4"
      style={{
        backgroundColor: THEME.CREAM,
        border: `2px solid ${THEME.BLUE}`,
      }}
    >
      <div className="relative w-full h-[300px]">
        <svg width="100%" height="100%" viewBox="0 0 600 300">
          {/* background */}
          <rect width="600" height="300" fill={THEME.CREAM} />

          {/* field lines */}
          {showLines && (
            <>
              {/* Outer lines */}
              <path
                d="M 220 150 C 220 40, 380 40, 380 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />
              <path
                d="M 220 150 C 240 70, 360 70, 380 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />
              <path
                d="M 220 150 C 260 100, 340 100, 380 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />

              <path
                d="M 220 150 C 220 260, 380 260, 380 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />
              <path
                d="M 220 150 C 240 230, 360 230, 380 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />
              <path
                d="M 220 150 C 260 200, 340 200, 380 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />

              {/* Small inner straight lines (inside magnet direction) */}
              <path
                d="M 380 150 C 340 150, 260 150, 220 150"
                fill="none"
                stroke={THEME.BLUE}
                strokeOpacity={opacity}
                strokeWidth={strokeW}
              />
            </>
          )}

          {/* magnet body */}
          <rect x="220" y="125" width="80" height="50" fill="#C0392B" rx="6" />
          <rect x="300" y="125" width="80" height="50" fill="#2980B9" rx="6" />

          {/* N/S text */}
          <text
            x="260"
            y="158"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="white"
          >
            N
          </text>
          <text
            x="340"
            y="158"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="white"
          >
            S
          </text>

          {/* Labels */}
          <text x="50" y="30" fontSize="14" fontWeight="bold" fill="#333">
            Magnetic Field Lines
          </text>
        </svg>

        {/* note */}
        <p className="absolute bottom-2 left-3 text-sm font-semibold text-gray-700">
          Lines go from North (N) → South (S)
        </p>
      </div>
    </div>
  );
}

/** =========================
 *  MAIN COMPONENT
 *  ========================= */

export default function Magnetism() {
  const [strength, setStrength] = useState(60);
  const [showLines, setShowLines] = useState(true);

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: THEME.CREAM }}>
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h1 className="text-3xl font-extrabold mb-5 text-gray-900">
          Experiment: Magnetic Field Around a Bar Magnet
        </h1>

        {/* AIM */}
        <SectionCard title="Aim">
          <p className="text-gray-800">
            To study the pattern of magnetic field lines around a bar magnet
            and understand how iron filings align along these lines.
          </p>
        </SectionCard>

        {/* APPARATUS */}
        <SectionCard title="Apparatus Required">
          <ul className="list-disc ml-6 text-gray-800">
            <li>Bar Magnet</li>
            <li>Iron filings (virtual representation)</li>
            <li>Sheet / surface</li>
          </ul>
        </SectionCard>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Visualization */}
          <Panel title="Magnetic Field Visualization">
            <MagnetFieldLines showLines={showLines} strength={strength} />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <ValueBox
                label="Strength"
                value={`${strength}%`}
                color={THEME.ORANGE}
              />
              <ValueBox
                label="Field Lines"
                value={showLines ? "Visible" : "Hidden"}
                color={THEME.BLUE}
              />
            </div>
          </Panel>

          {/* Right: Controls */}
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
              <p className="mt-2 font-bold" style={{ color: THEME.ORANGE }}>
                Selected: {strength}%
              </p>
            </div>

            <button
              onClick={() => setShowLines(!showLines)}
              className="px-4 py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: THEME.BLUE }}
            >
              {showLines ? "Hide Field Lines" : "Show Field Lines"}
            </button>

            <div className="mt-5 text-sm font-semibold text-gray-700">
              <p>✅ Higher strength → Field lines look darker & thicker</p>
              <p>✅ Field lines are denser near poles</p>
            </div>
          </Panel>
        </div>

        {/* PROCEDURE */}
        <SectionCard title="Procedure">
          <ol className="list-decimal ml-6 text-gray-800">
            <li>Place the bar magnet on the surface.</li>
            <li>Observe magnetic field lines around the magnet.</li>
            <li>Increase strength and see how lines appear darker.</li>
            <li>Hide/show lines for better understanding.</li>
          </ol>
        </SectionCard>

        {/* OBSERVATION */}
        <SectionCard title="Observation & Result">
          <p className="text-gray-800">
            Magnetic field lines emerge from the North pole and enter the South
            pole. They form closed loops and are more concentrated near poles.
          </p>

          <p className="mt-3 font-bold text-gray-900">
            Result: Magnetic field is strongest near poles where lines are
            closest together.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
