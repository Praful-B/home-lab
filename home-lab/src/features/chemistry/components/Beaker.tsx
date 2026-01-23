type Props = {
    oilColor: string;
    oilVolume: number; // in grams (used only for visual height)
};

export default function Beaker({ oilColor, oilVolume }: Props) {
    // Visual scaling (purely for UI)
    const maxLiquidHeight = 90;
    const liquidHeight = Math.min(maxLiquidHeight, oilVolume * 8);

    return (
        <div
            style={{
                position: "absolute",
                left: "140px",
                bottom: "50px",
                textAlign: "center",
            }}
        >
            {/* BEAKER SVG */}
            <svg width="170" height="220">
                {/* Glass outline */}
                <path
                    d="
            M40 20
            Q40 10 50 10
            H120
            Q130 10 130 20
            V170
            Q130 185 115 185
            H55
            Q40 185 40 170
            Z
          "
                    fill="#ffffff"
                    stroke="#1f2937"
                    strokeWidth="4"
                />

                {/* Spout */}
                <path
                    d="M50 10 Q60 2 75 6"
                    fill="none"
                    stroke="#1f2937"
                    strokeWidth="4"
                />

                {/* Oil (LIQUID) */}
                <rect
                    x="48"
                    y={175 - liquidHeight}
                    width="74"
                    height={liquidHeight}
                    rx="10"
                    fill={oilColor}
                    style={{ transition: "all 600ms ease" }}
                />

                {/* Measurement lines */}
                {[...Array(5)].map((_, i) => (
                    <line
                        key={i}
                        x1="105"
                        x2="120"
                        y1={50 + i * 22}
                        y2={50 + i * 22}
                        stroke="#64748b"
                        strokeWidth="2"
                    />
                ))}
            </svg>

            {/* LABEL */}
            <div className="mt-2 text-sm font-semibold text-gray-700">
                Beaker (Oil Sample)
            </div>
        </div>
    );
}
