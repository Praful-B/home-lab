import { useState } from "react";
import Beaker from "../components/Beaker";
import Pipette from "../components/Pipette";
import DropAnimation from "../components/DropAnimation";
import ConicalFlask from "../components/ConicalFlask";
import LabTable from "../components/LabTable";
import { calculateHardness } from "../utils/calculateHardness";

export default function HardnessExperiment() {
    // ===== CONSTANTS =====
    const SAMPLE_VOLUME = 50; // mL of water
    const NORMALITY_EDTA = 0.01; // N
    const ENDPOINT_VOLUME = 10; // mL (visual endpoint)

    // ===== STATE =====
    const [volumeEDTA, setVolumeEDTA] = useState(0); // mL
    const [drop, setDrop] = useState(false);

    // ===== CALCULATION =====
    const hardness = calculateHardness(
        volumeEDTA,
        NORMALITY_EDTA,
        SAMPLE_VOLUME
    );

    // ===== ACTIONS =====
    const addDrop = () => {
        setDrop(true);
        setVolumeEDTA((v) => Number((v + 0.5).toFixed(1))); // ✅ 0.5 mL
        setTimeout(() => setDrop(false), 600);
    };


    const resetExperiment = () => {
        setVolumeEDTA(0);
        setDrop(false);
    };

    return (
        <div className="p-6 space-y-6">
            {/* TITLE */}
            <h1 className="text-2xl font-bold">
                Experiment: Estimation of Hardness of Water (EDTA Method)
            </h1>

            {/* AIM */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Aim</h2>
                <p>
                    To determine the total hardness of the given water sample
                    by titration with standard EDTA solution using
                    Eriochrome Black T (EBT) indicator.
                </p>
            </section>

            {/* THEORY */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Principle</h2>
                <p>
                    Hardness of water is caused by the presence of calcium and
                    magnesium ions. EDTA forms stable complexes with these
                    ions. Eriochrome Black T gives a wine-red color in the
                    presence of Ca²⁺/Mg²⁺ ions, which turns blue at the
                    endpoint.
                </p>
            </section>

            {/* EXPERIMENTAL SETUP */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg mb-2">
                    Experimental Setup
                </h2>

                <div className="flex flex-wrap gap-6">
                    <div>
                        <input
                            type="text"
                            value="Water Sample"
                            disabled
                            className="p-2 border rounded bg-gray-100 w-40"
                        />
                        <p className="text-sm text-gray-600">
                            Sample (50 mL)
                        </p>
                    </div>

                    <div>
                        <input
                            type="text"
                            value="0.01 N EDTA"
                            disabled
                            className="p-2 border rounded bg-gray-100 w-40"
                        />
                        <p className="text-sm text-gray-600">
                            Titrant
                        </p>
                    </div>

                    <div>
                        <input
                            type="text"
                            value="EBT Indicator"
                            disabled
                            className="p-2 border rounded bg-gray-100 w-40"
                        />
                        <p className="text-sm text-gray-600">
                            Indicator
                        </p>
                    </div>
                </div>
            </section>

            {/* LAB SIMULATION */}
            <LabTable>
                {/* Beaker with water */}
                <Beaker
                    liquidColor="#bfdbfe"
                    liquidVolume={SAMPLE_VOLUME}
                    label="Beaker (Water Sample)"
                />


                {/* Pipette (EDTA) */}
                <Pipette />

                {/* Drop */}
                <DropAnimation active={drop} />

                {/* Conical Flask */}
                <ConicalFlask
                    volume={volumeEDTA}
                    endpointVolume={ENDPOINT_VOLUME}
                    preEndpointColor="#7f1d1d"   // wine red (EBT + Ca/Mg)
                    endpointColor="#2563eb"      // blue (endpoint)
                />


            </LabTable>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
                <button
                    onClick={addDrop}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:scale-105 transition"
                >
                    Add EDTA Drop (0.1 mL)
                </button>

                <button
                    onClick={resetExperiment}
                    className="px-6 py-2 bg-gray-500 text-white rounded-xl shadow hover:scale-105 transition"
                >
                    Reset Experiment
                </button>
            </div>

            {/* FORMULA */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Formula</h2>
                <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                    Total Hardness (mg/L as CaCO₃) = (V × N × 50,000) / Sample Volume
                </p>
                <ul className="mt-2 text-sm">
                    <li>V = Volume of EDTA used (mL)</li>
                    <li>N = Normality of EDTA</li>
                </ul>
            </section>

            {/* OBSERVATION & RESULT */}
            <section className="bg-green-50 p-4 border rounded max-w-xl">
                <h2 className="font-semibold text-lg">
                    Observation & Result
                </h2>

                <p>
                    Volume of EDTA used (V): <b>{volumeEDTA} mL</b>
                </p>
                <p>
                    Normality of EDTA (N): <b>{NORMALITY_EDTA}</b>
                </p>
                <p>
                    Sample volume: <b>{SAMPLE_VOLUME} mL</b>
                </p>

                <p className="mt-2 text-lg">
                    <b>
                        Total Hardness of Water = {hardness} mg/L as CaCO₃
                    </b>
                </p>
            </section>
        </div>
    );
}
