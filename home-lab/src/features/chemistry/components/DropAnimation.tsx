export default function DropAnimation({ active }: { active: boolean }) {
    if (!active) return null;

    return (
        <div
            style={{
                position: "absolute",
                left: "620px",   // ⭐ EXACT flask + pipette tip
                top: "125px",    // just below pipette tip
                width: "10px",
                height: "14px",
                backgroundColor: "#38bdf8",
                borderRadius: "50%",
                animation: "dropFall 0.6s linear",
                zIndex: 20,
            }}
        >
            <style>
                {`
          @keyframes dropFall {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(190px); opacity: 0; }
          }
        `}
            </style>
        </div>
    );
}
