import React, { useState } from "react";

const questions = [
  { q: "You prefer to spend your weekend:", options: ["Reading", "Partying", "Both", "Sleeping"] },
  { q: "You feel energized by:", options: ["Alone time", "Socializing", "Depends", "Music"] },
  { q: "In a group, you are:", options: ["Quiet observer", "Center of attention", "Mix", "Supportive"] },
  { q: "At work/school you prefer:", options: ["Solo tasks", "Group projects", "Flexible", "Rotating"] },
  { q: "People describe you as:", options: ["Reserved", "Outgoing", "Balanced", "Adaptable"] },
  { q: "When traveling you:", options: ["Explore alone", "Meet locals", "Both", "Depends"] }
];

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const calculateResult = () => {
    const all = Object.values(answers);
    const introvert = all.filter(a =>
      ["Reading", "Alone time", "Quiet observer", "Solo tasks", "Reserved", "Explore alone"].includes(a)
    ).length;
    const extrovert = all.filter(a =>
      ["Partying", "Socializing", "Center of attention", "Group projects", "Outgoing", "Meet locals"].includes(a)
    ).length;

    setResult(
      introvert > extrovert
        ? "You are an Introvert 🌙"
        : extrovert > introvert
        ? "You are an Extrovert ☀️"
        : "You are an Ambivert 🌗"
    );
  };

  return (
    <div className="page quiz-container">
      <h2 className="quiz-head centered">Personality Quiz</h2>
      {questions.map((item, i) => (
        <div key={i} className="question">
          <p>{item.q}</p>
          <div className="options">
            {item.options.map((opt, j) => (
              <button
                key={j}
                onClick={() => handleAnswer(i, opt)}
                className={answers[i] === opt ? "selected" : ""}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="quiz-btn">
        <button onClick={calculateResult}>See Result</button>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default Quiz;
