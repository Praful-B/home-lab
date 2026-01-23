import { useState } from "react";
import { oils } from "../data/oils";
import LabTable from "../components/LabTable";
import Beaker from "../components/Beaker";
import Pipette from "../components/Pipette";
import DropAnimation from "../components/DropAnimation";
import ConicalFlask from "../components/ConicalFlask";
import { calculateAcidValue } from "../utils/calculateAcidValue";

export default function AcidValueExperiment() {
    // DEFAULT VALUES
    const DEFAULT_WEIGHT = 5; // g
    const DEFAULT_NORMALITY = 0.1; // N
    const DEFAULT_VOLUME = 0; // mL

    const [selectedOil, setSelectedOil] = useState(oils[0]);
    const [oilWeight, setOilWeight] = useState(DEFAULT_WEIGHT);
    const [volume, setVolume] = useState(DEFAULT_VOLUME);
    const [drop, setDrop] = useState(false);

    const acidValue = calculateAcidValue(
        volume,
        DEFAULT_NORMALITY,
        oilWeight
    );

    const addDrop = () => {
        setDrop(true);
        setVolume((v) => Number((v + 0.1).toFixed(1))); // 0.1 mL per drop
        setTimeout(() => setDrop(false), 500);
    };

    const resetExperiment = () => {
        setSelectedOil(oils[0]);
        setOilWeight(DEFAULT_WEIGHT);
        setVolume(DEFAULT_VOLUME);
        setDrop(false);
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">
                Experiment: Determination of Acid Value of Oil
            </h1>

            {/* AIM */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Aim</h2>
                <p>
                    To determine the acid value of the given oil sample by titration
                    against standard potassium hydroxide (KOH) solution.
                </p>
            </section>

            {/* EXPERIMENTAL SETUP */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg mb-2">
                    Experimental Setup
                </h2>

                <div className="flex flex-wrap gap-4">
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
                            Normality (N)
                        </p>
                    </div>
                </div>
            </section>

            {/* LAB SIMULATION */}
            <LabTable>
                <Beaker
                    oilColor={selectedOil.color}
                    oilVolume={oilWeight}
                />
                <Pipette />
                <DropAnimation active={drop} />
                <ConicalFlask endpoint={volume >= 2.5} />
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
                    <li>Weigh the oil sample accurately (in grams).</li>
                    <li>Dissolve the oil in a suitable solvent.</li>
                    <li>Add phenolphthalein indicator.</li>
                    <li>
                        Titrate against standard KOH solution until a faint
                        permanent pink color appears.
                    </li>
                    <li>
                        Note the volume of KOH used (in millilitres).
                    </li>
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
                    <li>N = Normality of KOH (eq/L)</li>
                    <li>W = Weight of oil (g)</li>
                </ul>
                <p className="mt-2 text-sm">
                    Acid Value is expressed as <b>mg KOH / g of oil</b>.
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
                    Normality of KOH (N): <b>{DEFAULT_NORMALITY} N</b>
                </p>
                <p>
                    Weight of oil (W): <b>{oilWeight} g</b>
                </p>

                <p className="mt-2 text-lg">
                    <b>
                        Acid Value of the given oil =
                        {" "}
                        {acidValue} mg KOH / g oil
                    </b>
                </p>
            </section>
        </div>
    );
}
