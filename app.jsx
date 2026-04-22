import { useState, useEffect, useCallback } from “react”;

const STATES = [
{ name: “Alabama”, abbr: “AL” }, { name: “Alaska”, abbr: “AK” },
{ name: “Arizona”, abbr: “AZ” }, { name: “Arkansas”, abbr: “AR” },
{ name: “California”, abbr: “CA” }, { name: “Colorado”, abbr: “CO” },
{ name: “Connecticut”, abbr: “CT” }, { name: “Delaware”, abbr: “DE” },
{ name: “Florida”, abbr: “FL” }, { name: “Georgia”, abbr: “GA” },
{ name: “Hawaii”, abbr: “HI” }, { name: “Idaho”, abbr: “ID” },
{ name: “Illinois”, abbr: “IL” }, { name: “Indiana”, abbr: “IN” },
{ name: “Iowa”, abbr: “IA” }, { name: “Kansas”, abbr: “KS” },
{ name: “Kentucky”, abbr: “KY” }, { name: “Louisiana”, abbr: “LA” },
{ name: “Maine”, abbr: “ME” }, { name: “Maryland”, abbr: “MD” },
{ name: “Massachusetts”, abbr: “MA” }, { name: “Michigan”, abbr: “MI” },
{ name: “Minnesota”, abbr: “MN” }, { name: “Mississippi”, abbr: “MS” },
{ name: “Missouri”, abbr: “MO” }, { name: “Montana”, abbr: “MT” },
{ name: “Nebraska”, abbr: “NE” }, { name: “Nevada”, abbr: “NV” },
{ name: “New Hampshire”, abbr: “NH” }, { name: “New Jersey”, abbr: “NJ” },
{ name: “New Mexico”, abbr: “NM” }, { name: “New York”, abbr: “NY” },
{ name: “North Carolina”, abbr: “NC” }, { name: “North Dakota”, abbr: “ND” },
{ name: “Ohio”, abbr: “OH” }, { name: “Oklahoma”, abbr: “OK” },
{ name: “Oregon”, abbr: “OR” }, { name: “Pennsylvania”, abbr: “PA” },
{ name: “Rhode Island”, abbr: “RI” }, { name: “South Carolina”, abbr: “SC” },
{ name: “South Dakota”, abbr: “SD” }, { name: “Tennessee”, abbr: “TN” },
{ name: “Texas”, abbr: “TX” }, { name: “Utah”, abbr: “UT” },
{ name: “Vermont”, abbr: “VT” }, { name: “Virginia”, abbr: “VA” },
{ name: “Washington”, abbr: “WA” }, { name: “West Virginia”, abbr: “WV” },
{ name: “Wisconsin”, abbr: “WI” }, { name: “Wyoming”, abbr: “WY” },
];

function shuffle(arr) {
const a = […arr];
for (let i = a.length - 1; i > 0; i–) {
const j = Math.floor(Math.random() * (i + 1));
[a[i], a[j]] = [a[j], a[i]];
}
return a;
}

function generateOptions(correct, allStates, field) {
const others = allStates.filter(s => s[field] !== correct[field]);
const picks = shuffle(others).slice(0, 3).map(s => s[field]);
return shuffle([correct[field], …picks]);
}

const MODES = [
{ id: “nameToAbbr”, label: “Name → Abbreviation”, emoji: “🔤” },
{ id: “abbrToName”, label: “Abbreviation → Name”, emoji: “🗺️” },
{ id: “mixed”, label: “Mixed Mode”, emoji: “🎲” },
];

export default function App() {
const [screen, setScreen] = useState(“home”); // home | quiz | results
const [mode, setMode] = useState(“mixed”);
const [questions, setQuestions] = useState([]);
const [current, setCurrent] = useState(0);
const [selected, setSelected] = useState(null);
const [score, setScore] = useState(0);
const [wrong, setWrong] = useState([]);
const [streak, setStreak] = useState(0);
const [bestStreak, setBestStreak] = useState(0);
const [shake, setShake] = useState(false);
const [bounce, setBounce] = useState(false);

const startQuiz = useCallback(() => {
const shuffled = shuffle(STATES);
const qs = shuffled.map(state => {
let qMode = mode;
if (mode === “mixed”) qMode = Math.random() > 0.5 ? “nameToAbbr” : “abbrToName”;
const isNameToAbbr = qMode === “nameToAbbr”;
return {
state,
question: isNameToAbbr ? state.name : state.abbr,
answer: isNameToAbbr ? state.abbr : state.name,
options: generateOptions(state, STATES, isNameToAbbr ? “abbr” : “name”),
type: qMode,
};
});
setQuestions(qs);
setCurrent(0);
setSelected(null);
setScore(0);
setWrong([]);
setStreak(0);
setBestStreak(0);
setScreen(“quiz”);
}, [mode]);

const handleAnswer = (opt) => {
if (selected !== null) return;
setSelected(opt);
const q = questions[current];
if (opt === q.answer) {
setScore(s => s + 1);
const newStreak = streak + 1;
setStreak(newStreak);
if (newStreak > bestStreak) setBestStreak(newStreak);
setBounce(true);
setTimeout(() => setBounce(false), 600);
} else {
setWrong(w => […w, { question: q.question, correct: q.answer, chosen: opt, type: q.type }]);
setStreak(0);
setShake(true);
setTimeout(() => setShake(false), 500);
}
setTimeout(() => {
if (current + 1 >= questions.
[4/22/2026 6:01 AM] Kamal UGL: length) {
setScreen(“results”);
} else {
setCurrent(c => c + 1);
setSelected(null);
}
}, 900);
};

const q = questions[current];
const progress = questions.length ? (current / questions.length) * 100 : 0;

return (
<div style={{
minHeight: “100vh”,
background: “linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)”,
fontFamily: “‘Georgia’, serif”,
display: “flex”,
flexDirection: “column”,
alignItems: “center”,
justifyContent: “center”,
padding: “20px”,
position: “relative”,
overflow: “hidden”,
}}>
{/* Stars bg */}
{[…Array(20)].map((_, i) => (
<div key={i} style={{
position: “fixed”,
width: i % 3 === 0 ? “3px” : “2px”,
height: i % 3 === 0 ? “3px” : “2px”,
borderRadius: “50%”,
background: “white”,
opacity: 0.3 + Math.random() * 0.4,
top: ${Math.random() * 100}%,
left: ${Math.random() * 100}%,
pointerEvents: “none”,
}} />
))}
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@400;600&display=swap');
    .opt-btn { transition: all 0.18s ease; cursor: pointer; }
    .opt-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important; }
    @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }
    @keyframes bounce { 0%,100%{transform:scale(1)} 40%{transform:scale(1.06)} 70%{transform:scale(0.97)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    .shake { animation: shake 0.5s ease; }
    .bounce { animation: bounce 0.6s ease; }
    .fade-up { animation: fadeUp 0.4s ease forwards; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
    .streak-pulse { animation: pulse 1s ease infinite; }
  `}</style>

  {/* ── HOME ── */}
  {screen === "home" && (
    <div className="fade-up" style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
      <div style={{ fontSize: 56, marginBottom: 8 }}>🇺🇸</div>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 6vw, 3rem)",
        color: "#f8fafc",
        margin: "0 0 8px",
        lineHeight: 1.1,
      }}>USA States Quiz</h1>
      <p style={{ color: "#94a3b8", fontFamily: "'Source Sans 3', sans-serif", fontSize: 17, marginBottom: 32 }}>
        All 50 states · Learn names & abbreviations
      </p>

      <div style={{ marginBottom: 28 }}>
        <p style={{ color: "#cbd5e1", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, marginBottom: 12, textTransform: "uppercase", letterSpacing: 2 }}>Choose Mode</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {MODES.map(m => (
            <button key={m.id} onClick={() => setMode(m.id)} style={{
              padding: "10px 18px",
              borderRadius: 12,
              border: mode === m.id ? "2px solid #60a5fa" : "2px solid rgba(255,255,255,0.1)",
              background: mode === m.id ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.04)",
              color: mode === m.id ? "#93c5fd" : "#94a3b8",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.2s",
            }}>
              {m.emoji} {m.label}
            </button>
          ))}
        </div>
      </div>

      <button onClick={startQuiz} style={{
        background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
        color: "white",
        border: "none",
        borderRadius: 16,
        padding: "16px 48px",
        fontSize: 20,
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
        letterSpacing: 0.5,
      }}>
        Start Quiz →
      </button>

      <p style={{ color: "#475569", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, marginTop: 24 }}>
        50 questions · Multiple choice · Instant feedback
      </p>
    </div>
  )}
{/* ── QUIZ ── */}
  {screen === "quiz" && q && (
    <div className="fade-up" style={{ maxWidth: 560, width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ color: "#94a3b8", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14 }}>
          {current + 1} / {questions.length}
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          {streak >= 3 && (
            <span className="streak-pulse" style={{ color: "#f59e0b", fontSize: 13, fontFamily: "'Source Sans 3', sans-serif" }}>
              🔥 {streak} streak!
            </span>
          )}
          <span style={{ color: "#22c55e", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14 }}>
            ✓ {score}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 99, marginBottom: 28, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
          borderRadius: 99,
          transition: "width 0.4s ease",
        }} />
      </div>

      {/* Question card */}
      <div className={shake ? "shake" : bounce ? "bounce" : ""} style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 24,
        padding: "36px 32px",
        textAlign: "center",
        marginBottom: 20,
        backdropFilter: "blur(10px)",
      }}>
        <p style={{ color: "#64748b", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
          {q.type === "nameToAbbr" ? "What is the abbreviation for..." : "Which state uses the abbreviation..."}
        </p>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: q.type === "abbrToName" ? "clamp(2.5rem, 10vw, 4.5rem)" : "clamp(1.6rem, 5vw, 2.6rem)",
          fontWeight: 900,
          color: "#f1f5f9",
          lineHeight: 1.1,
          letterSpacing: q.type === "abbrToName" ? 6 : 0,
        }}>
          {q.question}
        </div>
      </div>

      {/* Options */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {q.options.map((opt) => {
          const isCorrect = opt === q.answer;
          const isChosen = opt === selected;
          let bg = "rgba(255,255,255,0.05)";
          let border = "1px solid rgba(255,255,255,0.1)";
          let color = "#e2e8f0";
          if (selected !== null) {
            if (isCorrect) { bg = "rgba(34,197,94,0.18)"; border = "1px solid #22c55e"; color = "#86efac"; }
            else if (isChosen) { bg = "rgba(239,68,68,0.18)"; border = "1px solid #ef4444"; color = "#fca5a5"; }
            else { bg = "rgba(255,255,255,0.02)"; color = "#475569"; }
          }
          return (
            <button key={opt} className="opt-btn" onClick={() => handleAnswer(opt)} style={{
              background: bg,
              border,
              borderRadius: 14,
              padding: "16px 12px",
              color,
              fontFamily: "'Playfair Display', serif",
              fontSize: opt.length > 12 ? 15 : 18,
              fontWeight: 700,
              cursor: selected !== null ? "default" : "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              letterSpacing: q.type === "nameToAbbr" ? 2 : 0,
              transition: "all 0.18s ease",
            }}>
              {isChosen && !isCorrect ? "✗ " : isCorrect && selected !== null ? "✓ " : ""}{opt}
            </button>
          );
        })}
      </div>
    </div>
  )}

  {/* ── RESULTS ── */}
  {screen === "results" && (
    <div className="fade-up" style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
      <div style={{ fontSize: 52, marginBottom: 8 }}>
        {score === 50 ? "🏆" : score >= 40 ? "🌟" : score >= 30 ? "👍" : "📚"}
</div>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
        color: "#f1f5f9",
        margin: "0 0 6px",
      }}>
        {score === 50 ? "Perfect Score!" : score >= 40 ? "Great Job!" : score >= 30 ? "Good Work!" : "Keep Practicing!"}
      </h2>
      <p style={{ color: "#94a3b8", fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, marginBottom: 24 }}>
        You got <span style={{ color: "#60a5fa", fontWeight: 700 }}>{score}</span> out of <span style={{ color: "#f8fafc", fontWeight: 700 }}>50</span> correct
        {bestStreak >= 5 && <> · Best streak: <span style={{ color: "#f59e0b" }}>🔥 {bestStreak}</span></>}
      </p>

      {/* Score bar */}
      <div style={{ height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 99, marginBottom: 28, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${(score / 50) * 100}%`,
          background: score >= 40 ? "linear-gradient(90deg,#22c55e,#86efac)" : score >= 25 ? "linear-gradient(90deg,#f59e0b,#fcd34d)" : "linear-gradient(90deg,#ef4444,#fca5a5)",
          borderRadius: 99,
          transition: "width 0.8s ease",
        }} />
      </div>

      {/* Wrong answers */}
      {wrong.length > 0 && (
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 18,
          padding: "20px 24px",
          marginBottom: 24,
          maxHeight: 220,
          overflowY: "auto",
          textAlign: "left",
        }}>
          <p style={{ color: "#f87171", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
            Review these ({wrong.length})
          </p>
          {wrong.map((w, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < wrong.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <span style={{ color: "#94a3b8", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14 }}>
                {w.question}
              </span>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#f87171", fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, textDecoration: "line-through" }}>{w.chosen}</span>
                <span style={{ color: "#86efac", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14 }}>{w.correct}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={startQuiz} style={{
          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          color: "white",
          border: "none",
          borderRadius: 14,
          padding: "14px 36px",
          fontSize: 17,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 8px 28px rgba(59,130,246,0.35)",
        }}>
          Try Again
        </button>
        <button onClick={() => setScreen("home")} style={{
          background: "rgba(255,255,255,0.06)",
          color: "#94a3b8",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 14,
          padding: "14px 28px",
          fontSize: 17,
          fontFamily: "'Source Sans 3', sans-serif",
          cursor: "pointer",
        }}>
          Change Mode
        </button>
      </div>
    </div>
  )}
</div>

);
}
