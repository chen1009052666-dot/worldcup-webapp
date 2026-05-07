"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<any>(null);

  const predict = (team: string) => {
    const percent = Math.floor(Math.random() * 100);

    let type = "";

    if (percent > 70) type = "🟢 Football Expert";
    else if (percent > 40) type = "🟡 Smart Fan";
    else type = "🔴 Risk Taker";

    setResult({
      team,
      percent,
      type,
    });
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 20 }}>
        ⚽ World Cup Prediction
      </h1>

      <p style={{ marginBottom: 30 }}>
        Choose your winner and see your fan level
      </p>

      <div style={{ display: "flex", gap: 20 }}>
        <button
          onClick={() => predict("France")}
          style={{
            padding: "15px 25px",
            borderRadius: 12,
            border: "none",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          🇫🇷 France
        </button>

        <button
          onClick={() => predict("Argentina")}
          style={{
            padding: "15px 25px",
            borderRadius: 12,
            border: "none",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          🇦🇷 Argentina
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 40 }}>
          <h2>You picked: {result.team}</h2>
          <h3>Confidence: {result.percent}%</h3>
          <h2>{result.type}</h2>
        </div>
      )}
    </main>
  );
}