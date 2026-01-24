import { useState } from "react";
import DistillationFlask from "../components/DistillationFlask";
import Thermometer from "../components/Thermometer";
import Condenser from "../components/Condenser";
import ReceiverFlask from "../components/ReceiverFlask";
import Burner from "../components/Burner";

export default function DistillationExperiment() {
    const [heating, setHeating] = useState(false);

    return (
        <div className="p-6 space-y-6">
            {/* TITLE */}
            <h1 className="text-2xl font-bold">
                Experiment: Simple Distillation
            </h1>

            {/* AIM */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Aim</h2>
                <p>
                    To separate a liquid mixture based on the difference in
                    boiling points of its components using simple distillation.
                </p>
            </section>

            {/* PRINCIPLE */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Principle</h2>
                <p>
                    When a liquid is heated to its boiling point, it vaporizes.
                    The vapors are cooled in a condenser and collected as liquid.
                    This separates components based on boiling point differences.
                </p>
            </section>

            {/* APPARATUS */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Apparatus Required</h2>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Distillation flask</li>
                    <li>Thermometer</li>
                    <li>Liebig condenser</li>
                    <li>Receiver flask</li>
                    <li>Burner / heating source</li>
                </ul>
            </section>

            {/* EXPERIMENTAL SETUP */}
            <section className="bg-white p-4 rounded">
                <h2 className="font-semibold text-lg text-center mb-8">
                    Experimental Setup
                </h2>

                {/* CENTER ONLY SETUP */}
                <div className="flex justify-center mt-6">
                    <div
                        style={{
                            position: "relative",
                            height: "420px",
                            width: "100%",
                            maxWidth: "900px",
                            background: "#f8fafc",
                            borderRadius: "12px",
                        }}
                    >
                        <DistillationFlask heating={heating} />
                        <Thermometer heating={heating} />
                        <Condenser heating={heating} />
                        <ReceiverFlask heating={heating} />
                        <Burner heating={heating} />
                    </div>
                </div>

                {/* CONTROL BUTTON */}
                <div className="flex justify-start mt-8r">
                    <button
                        onClick={() => setHeating((h) => !h)}
                        className="mt-8 px-6 py-2 bg-orange-600 text-white rounded-xl shadow hover:scale-105 transition"
                    >
                        {heating ? "Stop Heating" : "Start Heating"}
                    </button>
                </div>
            </section>

            {/* PROCEDURE */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Procedure</h2>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li>Take the liquid mixture in the distillation flask.</li>
                    <li>Insert the thermometer using a rubber stopper.</li>
                    <li>Connect the flask to the Liebig condenser.</li>
                    <li>Place the receiver flask at the outlet.</li>
                    <li>Heat gently and observe vapor formation.</li>
                    <li>Collect the condensed liquid.</li>
                </ol>
            </section>

            {/* RESULT */}
            <section className="bg-green-50 p-4 border rounded max-w-xl">
                <h2 className="font-semibold text-lg">Result</h2>
                <p>
                    The liquid mixture was successfully separated using simple
                    distillation based on differences in boiling points.
                </p>
            </section>
        </div>
    );
}
