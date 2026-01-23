import { useState } from "react";

export default function ElectrolysisExperiment() {
    const [started, setStarted] = useState(false);

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">
                Experiment: Electrolysis of Water
            </h1>

            {/* AIM */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Aim</h2>
                <p>
                    To study the electrolysis of water and observe the ratio of
                    hydrogen and oxygen gases produced.
                </p>
            </section>

            {/* PRINCIPLE */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Principle</h2>
                <p>
                    When electric current is passed through acidulated water,
                    it decomposes into hydrogen and oxygen gases. Hydrogen is
                    liberated at the cathode and oxygen at the anode in the
                    volume ratio 2:1.
                </p>
            </section>

            {/* APPARATUS */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Apparatus Required</h2>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Electrolysis vessel (Hoffmann voltameter)</li>
                    <li>DC power supply</li>
                    <li>Electrodes</li>
                    <li>Acidulated water (electrolyte)</li>
                </ul>
            </section>

            {/* EXPERIMENTAL SETUP */}
            <section className="bg-white p-4 rounded">
                <h2 className="font-semibold text-lg text-center mb-8">
                    Experimental Setup
                </h2>

                <div className="flex justify-center">
                    <div
                        style={{
                            position: "relative",
                            width: "420px",
                            height: "480px",
                            background: "#f8fafc",
                            borderRadius: "16px",
                        }}
                    >
                        {/* MAIN VESSEL */}
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "40px",
                                transform: "translateX(-50%)",
                                width: "260px",
                                height: "340px",
                                border: "4px solid #1f2937",
                                borderRadius: "16px",
                                overflow: "hidden",
                                background: "white",
                            }}
                        >
                            {/* ELECTROLYTE */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "100%",
                                    height: "180px",
                                    background: "#bfdbfe",
                                }}
                            />

                            {/* LEFT GAS TUBE – HYDROGEN */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "30px",
                                    top: "20px",
                                    width: "60px",
                                    height: "300px",
                                    border: "3px solid #1f2937",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    background: "white",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%",
                                        height: started ? "200px" : "0px",
                                        background: "#fde68a",
                                        transition: "height 4s linear",
                                    }}
                                />
                            </div>

                            {/* RIGHT GAS TUBE – OXYGEN */}
                            <div
                                style={{
                                    position: "absolute",
                                    right: "30px",
                                    top: "20px",
                                    width: "60px",
                                    height: "300px",
                                    border: "3px solid #1f2937",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    background: "white",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%",
                                        height: started ? "100px" : "0px",
                                        background: "#a5f3fc",
                                        transition: "height 4s linear",
                                    }}
                                />
                            </div>

                            {/* ELECTRODES */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "55px",
                                    bottom: "160px",
                                    width: "10px",
                                    height: "30px",
                                    background: "#1f2937",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    right: "55px",
                                    bottom: "160px",
                                    width: "10px",
                                    height: "30px",
                                    background: "#1f2937",
                                }}
                            />
                        </div>

                        {/* LABELS */}
                        <div style={{ position: "absolute", top: "15px", left: "40px", fontWeight: 600 }}>
                            Hydrogen (H₂)
                        </div>

                        <div style={{ position: "absolute", top: "15px", right: "40px", fontWeight: 600 }}>
                            Oxygen (O₂)
                        </div>

                        <div style={{ position: "absolute", top: "80px", left: "30px", fontSize: "14px" }}>
                            Cathode (−)
                        </div>

                        <div style={{ position: "absolute", top: "80px", right: "30px", fontSize: "14px" }}>
                            Anode (+)
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                top: "260px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: "14px",
                                fontWeight: 600,
                            }}
                        >
                            Acidulated Water (Electrolyte)
                        </div>

                        {/* POWER SUPPLY */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "170px",
                                height: "60px",
                                background: "#1f2937",
                                borderRadius: "10px",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 600,
                            }}
                        >
                            DC Power Supply
                        </div>
                    </div>
                </div>

                {/* CONTROLS */}
                <div className="flex justify-start gap-4 mt-8">
                    <button
                        disabled={started}
                        onClick={() => setStarted(true)}
                        className={`px-6 py-2 rounded-xl shadow transition ${
                            started
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-blue-600 text-white hover:scale-105"
                        }`}
                    >
                        Start Electrolysis
                    </button>

                    <button
                        onClick={() => setStarted(false)}
                        className="px-6 py-2 bg-gray-600 text-white rounded-xl shadow hover:scale-105 transition"
                    >
                        Reset
                    </button>
                </div>
            </section>

            {/* PROCEDURE */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Procedure</h2>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li>Fill the electrolysis vessel with acidulated water.</li>
                    <li>Insert the electrodes into the water.</li>
                    <li>Connect the electrodes to the DC power supply.</li>
                    <li>Switch on the power supply to start electrolysis.</li>
                    <li>Observe gas bubbles forming at both electrodes.</li>
                    <li>Collect hydrogen at the cathode and oxygen at the anode.</li>
                    <li>Note that the volume of hydrogen is twice that of oxygen.</li>
                </ol>
            </section>

            {/* RESULT */}
            <section className="bg-green-50 p-4 border rounded max-w-xl">
                <h2 className="font-semibold text-lg">Result</h2>
                <p>
                    Hydrogen gas was collected at the cathode and oxygen gas at the
                    anode in the volume ratio 2:1, confirming the chemical
                    composition of water.
                </p>
            </section>
        </div>
    );
}
