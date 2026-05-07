"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<any>(null);

  const choose = (team: string) => {
    const percent = Math.floor(Math.random() * 80) + 10;

    let type = "";
    if (percent > 70) type = "🟢 Safe Player";
    else if (percent > 40) type = "🟡 Balanced Thinker";
    else type = "🔴 Risk Taker";

    setResult({ team, percent, type });
  };

  return (
    <div style={{
      padding: 20,
      textAlign: "center",
      background: "#000",
      color: "#fff",
      height: "100vh"
    }}>
      
      <h2>🇫🇷 France vs 🇦🇷 Argentina</h2>

      <p>⚠️ Only 12% users choose this outcome</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={() => choose("France Win")}>France Win</button>
        <button onClick={() => choose("Draw")}>Draw</button>
        <button onClick={() => choose("Argentina Win")}>Argentina Win</button>
      </div>

      {result && (
        <div style={{ marginTop: 20, padding: 10, background: "#111" }}>
          
          <h3>🔥 TOP {result.percent}% risk level</h3>
          <p>{result.type}</p>

          <div style={{ marginTop: 10 }}>
            My Prediction: {result.team} <br />
            Only {result.percent}% agree
          </div>

          <button style={{
            marginTop: 10,
            padding: 10,
            background: "#00c853",
            color: "#fff",
            border: "none"
          }}>
            🚀 Share Result
          </button>

        </div>
      )}

    </div>
  );
}