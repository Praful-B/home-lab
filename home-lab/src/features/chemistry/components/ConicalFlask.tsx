export default function ConicalFlask({ endpoint }: { endpoint: boolean }) {
    return (
        <div
            style={{
                position: "absolute",
                left: "620px",     // ⭐ flask center
                bottom: "50px",
                transform: "translateX(-50%)",
                textAlign: "center",
            }}
        >
            <svg width="160" height="200">
                {/* Mouth */}
                <rect
                    x="70"
                    y="0"
                    width="20"
                    height="30"
                    rx="6"
                    fill="#ffffff"
                    stroke="#1f2937"
                    strokeWidth="3"
                />

                {/* Body */}
                <polygon
                    points="60,30 100,30 130,170 30,170"
                    fill={endpoint ? "#fbcfe8" : "#ffffff"}
                    stroke="#1f2937"
                    strokeWidth="4"
                />
            </svg>

            <div className="mt-2 text-sm font-semibold text-gray-700">
                Conical Flask
            </div>
        </div>
    );
}
