import { useState } from "react";
import Beaker from "../components/Beaker";
import Pipette from "../components/Pipette";
import DropAnimation from "../components/DropAnimation";
import ConicalFlask from "../components/ConicalFlask";
import LabTable from "../components/LabTable";
import { calculateAcidValue } from "../utils/calculateAcidValue";
import { oils } from "../data/oils";

export default function AcidValueExperiment() {
    // ===== CONSTANTS =====
    const DEFAULT_WEIGHT = 5; // g
    const NORMALITY = 0.1; // N
    const ENDPOINT_VOLUME = 2.5; // mL

    // ===== STATE =====
    const [selectedOil, setSelectedOil] = useState(oils[0]);
    const [oilWeight, setOilWeight] = useState(DEFAULT_WEIGHT);
    const [volume, setVolume] = useState(0); // mL of KOH
    const [drop, setDrop] = useState(false);

    // ===== CALCULATION =====
    const acidValue = calculateAcidValue(
        volume,
        NORMALITY,
        oilWeight
    );

    // ===== ACTIONS =====
    const addDrop = () => {
        setDrop(true);
        setVolume((v) => Number((v + 0.1).toFixed(1)));
        setTimeout(() => setDrop(false), 600);
    };

    const resetExperiment = () => {
        setSelectedOil(oils[0]);
        setOilWeight(DEFAULT_WEIGHT);
        setVolume(0);
        setDrop(false);
    };

    return (
        <div className="p-6 space-y-6">
            {/* TITLE */}
            <h1 className="text-2xl font-bold">
                Experiment: Determination of Acid Value of Oil
            </h1>

            {/* AIM */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Aim</h2>
                <p>
                    To determine the acid value of the given oil sample by
                    titration with standard potassium hydroxide (KOH) solution
                    using phenolphthalein as indicator.
                </p>
            </section>

            {/* EXPERIMENTAL SETUP */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg mb-2">
                    Experimental Setup
                </h2>

                <div className="flex flex-wrap gap-6">
                    <select
                        className="p-2 border rounded"
                        value={selectedOil.name}
                        onChange={(e) =>
                            setSelectedOil(
                                oils.find((o) => o.name === e.target.value)!
                            )
                        }
                    >
                        {oils.map((o) => (
                            <option key={o.name}>{o.name}</option>
                        ))}
                    </select>

                    <div>
                        <input
                            type="number"
                            min={1}
                            max={10}
                            value={oilWeight}
                            onChange={(e) =>
                                setOilWeight(Number(e.target.value))
                            }
                            className="p-2 border rounded w-32"
                        />
                        <p className="text-sm text-gray-600">
                            Weight of oil (g)
                        </p>
                    </div>

                    <div>
                        <input
                            type="text"
                            value="0.1 N KOH"
                            disabled
                            className="p-2 border rounded bg-gray-100 w-32"
                        />
                        <p className="text-sm text-gray-600">
                            Normality of KOH
                        </p>
                    </div>
                </div>
            </section>

            {/* LAB SIMULATION */}
            <LabTable>
                <Beaker
                    liquidColor={selectedOil.color}
                    liquidVolume={oilWeight}
                    label="Beaker (Oil Sample)"
                />


                <Pipette />

                <DropAnimation active={drop} />

                {/* 🔴 IMPORTANT FIX IS HERE */}
                <ConicalFlask
                    volume={volume}
                    endpointVolume={ENDPOINT_VOLUME}
                    preEndpointColor="#fde68a"   // faint / colorless
                    endpointColor="#f9a8d4"      // phenolphthalein pink
                />
            </LabTable>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
                <button
                    onClick={addDrop}
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:scale-105 transition"
                >
                    Add KOH Drop (0.1 mL)
                </button>

                <button
                    onClick={resetExperiment}
                    className="px-6 py-2 bg-gray-500 text-white rounded-xl shadow hover:scale-105 transition"
                >
                    Reset Experiment
                </button>
            </div>

            {/* PROCEDURE */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Procedure</h2>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Weigh the oil sample accurately.</li>
                    <li>Dissolve it in a suitable solvent.</li>
                    <li>Add phenolphthalein indicator.</li>
                    <li>
                        Titrate with standard KOH until a faint permanent
                        pink colour appears.
                    </li>
                    <li>Note the volume of KOH used.</li>
                </ol>
            </section>

            {/* FORMULA */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Formula</h2>
                <p className="font-mono bg-gray-100 p-2 rounded mt-2">
                    Acid Value = (V × N × 56.1) / W
                </p>
                <ul className="mt-2 text-sm">
                    <li>V = Volume of KOH used (mL)</li>
                    <li>N = Normality of KOH</li>
                    <li>W = Weight of oil (g)</li>
                </ul>
                <p className="mt-2 text-sm">
                    Acid value is expressed as <b>mg KOH / g oil</b>.
                </p>
            </section>

            {/* OBSERVATION & RESULT */}
            <section className="bg-green-50 p-4 border rounded max-w-xl">
                <h2 className="font-semibold text-lg">
                    Observation & Result
                </h2>

                <p>
                    Volume of KOH used (V): <b>{volume} mL</b>
                </p>
                <p>
                    Normality of KOH (N): <b>{NORMALITY} N</b>
                </p>
                <p>
                    Weight of oil (W): <b>{oilWeight} g</b>
                </p>

                <p className="mt-2 text-lg">
                    <b>
                        Acid Value of the given oil ={" "}
                        {acidValue} mg KOH / g oil
                    </b>
                </p>
            </section>
        </div>
    );
}
