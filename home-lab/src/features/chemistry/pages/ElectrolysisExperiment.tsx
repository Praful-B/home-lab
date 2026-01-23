export default function HardnessExperiment() {
    return (
        <div className="p-6 space-y-8">
            {/* TITLE */}
            <h1 className="text-2xl font-bold">
                Estimation of Hardness of Water (EDTA Method)
            </h1>

            {/* AIM */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Aim</h2>
                <p>
                    To determine the total hardness of a given water sample using
                    EDTA titration.
                </p>
            </section>

            {/* EXPERIMENTAL SETUP */}
            <section>
                <h2 className="text-lg font-semibold mb-6 text-center">
                    Experimental Setup
                </h2>

                {/* MAIN CARD – THIS IS WHERE SHADOW IS APPLIED */}
                <div
                    style={{
                        margin: "0 auto",
                        maxWidth: "1100px",
                        borderRadius: "26px",
                        background: "linear-gradient(180deg, #ffffff, #f1f5f9)",
                        padding: "48px",
                        boxShadow: `
              0 0 0 4px #cbd5e1,
              0 22px 50px rgba(0, 0, 0, 0.18)
            `,
                    }}
                >
                    {/* APPARATUS */}
                    <div className="relative flex justify-around items-end h-[320px]">
                        {/* BEAKER */}
                        <div className="text-center">
                            <svg width="90" height="160">
                                <rect
                                    x="10"
                                    y="10"
                                    width="70"
                                    height="130"
                                    rx="12"
                                    fill="white"
                                    stroke="#1f2937"
                                    strokeWidth="4"
                                />
                                <rect
                                    x="14"
                                    y="60"
                                    width="62"
                                    height="80"
                                    rx="8"
                                    fill="#bfdbfe"
                                />
                            </svg>
                            <div className="mt-3 font-semibold">
                                Beaker (Water Sample)
                            </div>
                        </div>

                        {/* PIPETTE */}
                        <div className="text-center">
                            <svg width="180" height="60">
                                <circle
                                    cx="40"
                                    cy="30"
                                    r="20"
                                    fill="#9ca3af"
                                    stroke="#1f2937"
                                    strokeWidth="4"
                                />
                                <rect
                                    x="60"
                                    y="26"
                                    width="100"
                                    height="8"
                                    rx="4"
                                    fill="#e5f0ff"
                                    stroke="#1f2937"
                                    strokeWidth="3"
                                />
                            </svg>
                            <div className="mt-3 font-semibold">
                                Pipette (KOH)
                            </div>
                        </div>

                        {/* CONICAL FLASK */}
                        <div className="text-center">
                            <svg width="100" height="160">
                                <rect
                                    x="42"
                                    y="0"
                                    width="16"
                                    height="30"
                                    rx="6"
                                    fill="white"
                                    stroke="#1f2937"
                                    strokeWidth="4"
                                />
                                <polygon
                                    points="20,30 80,30 60,150 40,150"
                                    fill="white"
                                    stroke="#1f2937"
                                    strokeWidth="4"
                                />
                            </svg>
                            <div className="mt-3 font-semibold">
                                Conical Flask
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCEDURE */}
            <section className="bg-white p-4 border rounded">
                <h2 className="font-semibold text-lg">Procedure</h2>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li>Take a measured volume of water sample in a conical flask.</li>
                    <li>Add buffer solution and indicator.</li>
                    <li>Titrate with EDTA solution.</li>
                    <li>Note the color change at the end point.</li>
                </ol>
            </section>

            {/* RESULT */}
            <section className="bg-green-50 p-4 border rounded max-w-xl">
                <h2 className="font-semibold text-lg">Result</h2>
                <p>
                    The hardness of the given water sample was determined using
                    EDTA titration.
                </p>
            </section>
        </div>
    );
}
