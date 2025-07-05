"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";

const RESULTS = [
  { type: "The Comedian", emoji: "🤣", percent: "Top 4%" },
  { type: "The Rusher", emoji: "🚀", percent: "Top 10%" },
  { type: "The Strategist", emoji: "🧠", percent: "Top 20%" },
  { type: "The Observer", emoji: "👀", percent: "Top 30%" },
  { type: "The Simp", emoji: "🥲", percent: "Top 50%" },
  { type: "The Ghost", emoji: "👻", percent: "Top 80%" },
];

const PRAISES: Record<string, string> = {
  "Top 4%": "Legendary! You're the rarest meme lord. Everyone wants you in their group chat.",
  "Top 10%": "Certified MVP! You're the guy everyone screenshots for advice.",
  "Top 20%": "Elite! Your meme game is strong. People wish they could be you.",
  "Top 30%": "Not bad! But you're still lurking in the group chat, aren't you?",
  "Top 50%": "Classic. You're the average meme enjoyer. Maybe try shooting your shot next time?",
  "Top 80%": "Bruh… You're basically a ghost. Your friends are still waiting for your reply.",
};

// 18문항, 4지선다, 6개 유형 인덱스(0~5)
// 0: Comedian, 1: Rusher, 2: Strategist, 3: Observer, 4: Simp, 5: Ghost
const TYPE_MAP = [
  // Q1
  [3, 0, 5, 4],
  // Q2
  [2, 0, 5, 4],
  // Q3
  [3, 1, 4, 5],
  // Q4
  [5, 2, 0, 3],
  // Q5
  [3, 4, 2, 5],
  // Q6
  [1, 4, 0, 2],
  // Q7
  [0, 5, 3, 4],
  // Q8
  [1, 4, 2, 0],
  // Q9
  [3, 2, 0, 5],
  // Q10
  [4, 1, 5, 2],
  // Q11
  [0, 3, 4, 1],
  // Q12
  [2, 5, 1, 0],
  // Q13
  [4, 1, 3, 5],
  // Q14
  [0, 2, 5, 3],
  // Q15
  [1, 0, 4, 2],
  // Q16
  [5, 3, 0, 1],
  // Q17
  [2, 4, 1, 5],
  // Q18
  [3, 5, 0, 4],
];

function getResultFromAnswers(answers: any) {
  if (!Array.isArray(answers) || answers.length !== 18 || answers.some(a => a === null)) return null;
  const typeScores = [0,0,0,0,0,0];
  answers.forEach((ans, idx) => {
    const typeIdx = TYPE_MAP[idx][ans];
    typeScores[typeIdx]++;
  });
  const maxScore = Math.max(...typeScores);
  const resultTypeIdx = typeScores.indexOf(maxScore);
  return RESULTS[resultTypeIdx];
}

export default function ResultPage() {
  const router = useRouter();
  const [toast, setToast] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  let answers: any = null;
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem("test-answers");
      answers = raw ? JSON.parse(raw) : null;
    } catch {}
  }
  const result = getResultFromAnswers(answers);

  useEffect(() => {
    if (result) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleRetake = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("test-answers", JSON.stringify(Array(18).fill(null)));
      router.push("/relatableguy/test/1");
    }
  };

  const handleCopy = () => {
    if (!result) {
      setToast("No result yet! Please complete the test first.");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    let shareText = "";
    switch (result.percent) {
      case "Top 4%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test.\nCertified meme lord. Bow before me. 😂🔥\nBet you can't top this. Prove me wrong 👉 https://naviahub.dev/relatableguy/`;
        break;
      case "Top 10%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test.\nElite meme game only. Are you even on my level? 😎\nTry to beat me 👉 https://naviahub.dev/relatableguy/`;
        break;
      case "Top 20%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test.\nNot quite a legend, but still a meme boss. 😂\nThink you can do better? 👉 https://naviahub.dev/relatableguy/`;
        break;
      case "Top 30%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test.\nGuess I'm just lurking in the meme world... 👀\nRoast me or try to beat my score 👉 https://naviahub.dev/relatableguy/`;
        break;
      case "Top 50%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test.\nClassic. I'm the average meme enjoyer. Maybe next time I'll go viral? 🥲\nThink you can flex harder? 👉 https://naviahub.dev/relatableguy/`;
        break;
      case "Top 80%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test.\nBruh... I'm basically a meme ghost. My friends are still waiting for my reply. 👻\nCan you do any worse? Try it 👉 https://naviahub.dev/relatableguy/`;
        break;
      default:
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Dating Test!\nhttps://naviahub.dev/relatableguy/`;
    }

    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setToast("Copied to clipboard!");
      setTimeout(() => setToast(""), 2000);
    } else if (typeof window !== "undefined") {
      // fallback for non-https or unsupported clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setToast("Copied to clipboard!");
      } catch (err) {
        setToast("Copy failed. Please copy manually.");
      }
      setTimeout(() => setToast(""), 2000);
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#18171a] px-4">
      {showConfetti && typeof window !== "undefined" && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={50}
          recycle={false}
          gravity={0.05}
          initialVelocityY={-15}
          friction={0.99}
          //origin={{ x: 0.5, y: 1 }}
        />
      )}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-lg mx-auto py-20">
        {result ? (
          <>
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#ff5da2] text-center mb-4 drop-shadow">
              You are:
            </h1>
            <div className="text-5xl font-bold text-center mb-2 text-white">
              {result.emoji} {result.type}
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-[#ff5da2] mb-2 text-center">
              {result.percent} of all test takers
            </p>
            <br></br>
            <p className="text-lg text-center mb-8 text-white">
              {PRAISES[result.percent]}
            </p>
          </>
        ) : (
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff5da2] text-center mb-8 drop-shadow">
            No result yet!<br />
            Please complete the test first.
          </h1>
        )}
        <div className="flex gap-4 justify-center mt-8">
          <button
            className="px-6 py-3 rounded-full bg-[#ff5da2] text-white font-semibold text-lg shadow-md hover:bg-[#ff7db2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff5da2] focus:ring-offset-2"
            onClick={handleRetake}
          >
            Retake Test
          </button>
          <button
            className="px-6 py-3 rounded-full bg-[#232228] text-[#ff5da2] font-semibold text-lg shadow-md hover:bg-[#35343a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff5da2] focus:ring-offset-2"
            onClick={handleCopy}
          >
            Copy Share
          </button>
        </div>
      </div>
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(40,40,40,0.95)",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: 24,
            fontSize: 18,
            fontWeight: 600,
            zIndex: 9999,
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
} 