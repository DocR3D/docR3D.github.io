import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value = 0, isScrolled }) {
    const num = Number.isFinite(value) ? value : parseInt(value, 10) || 0;
    const v = Math.max(0, Math.min(100, num));
    const showInside = v >= 20; // <20% : on met le label à droite pour rester lisible

    const track = {
        width: "95%",
        height: 12,
        background: "#e5e7eb",
        borderRadius: 9999,
        overflow: "hidden",
        position: "relative",
    };

    const bar = {
        height: "100%",
        width: `${v}%`,
        background: "#60a5fa",
        transition: "width .6s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 6,
    };

    const valueInside = {
        fontSize: 12,
        color: "white",
        lineHeight: 1,
        userSelect: "none",
    };

    const valueRight = {
        fontSize: 12,
        marginLeft: 8,
        lineHeight: 1,
        userSelect: "none",
        color: "#111",
    };

    return (
        <div style={{ width: "95%" }} role="group" aria-label={skill}>
            <p className="lead mb-1 mt-2" style={{ marginBottom: 6 }}>{skill}</p>

            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={track}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={v}
                >
                    <div style={bar}>
                        {showInside && <span style={valueInside}>{v}%</span>}
                    </div>
                </div>

                {!showInside && <span style={valueRight}>{v}%</span>}
            </div>
        </div>
    );
}



export default SkillsBar;
