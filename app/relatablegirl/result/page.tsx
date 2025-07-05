"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { gtag } from "@/app/util/ga";

const RESULTS = [
  { type: "The Overthinker", emoji: "🙈", percent: "Top 4%" },
  { type: "The Group Chat Queen", emoji: "💬", percent: "Top 10%" },
  { type: "The Outfit Planner", emoji: "👗", percent: "Top 20%" },
  { type: "The Meme Sender", emoji: "🤪", percent: "Top 30%" },
  { type: "The Chill Queen", emoji: "😎", percent: "Top 50%" },
  { type: "The Secret Romantic", emoji: "💖", percent: "Top 80%" },
];

const PRAISES: Record<string, string> = {
  "Top 4%": "You and your bestie could write a thesis on his every text. But hey, at least you'll never miss a red flag!",
  "Top 10%": "Your group chat is basically a 24/7 dating analysis lab. No move goes unreviewed. Your friends are lucky to have you as their meme supplier!",
  "Top 20%": "You treat every date like a runway show. Fashion is your love language, and you always show up looking iconic!",
  "Top 30%": "Why use words when memes say it all? You keep the vibe fun and everyone on their toes. The group chat lives for your energy!",
  "Top 50%": "You act chill, but your phone's screen time says otherwise. Effortlessly cool on the outside, softie on the inside!",
  "Top 80%": "You play it cool, but your heart is pure poetry. When you fall, you fall hard—and that's your secret superpower!",
};

const RESULT_FEATURES: Record<string, string[]> = {
  "Top 4%": [
    "🤔 You and your bestie analyze every 'hey' like it's a secret code.",
    "🕵️‍♀️ You spot red flags before anyone else even sees the flag.",
    "📱 You re-read texts 10 times before replying (and still overthink it)."
  ],
  "Top 10%": [
    "💬 Your group chat is always blowing up—because of you.",
    "👑 You're the one who starts every meme chain and late-night vent session.",
    "📸 You have a folder of screenshots ready for any emergency."
  ],
  "Top 20%": [
    "👗 You plan your date outfit a week in advance (and change it 5 times).",
    "💄 Your mirror selfies are basically a lookbook.",
    "🛍️ You and your friends swap style tips like it's a sport."
  ],
  "Top 30%": [
    "🤪 You reply to everything with a meme or a GIF.",
    "😂 Your friends say you 'speak fluent meme.'",
    "📲 You have a meme for every mood, every situation."
  ],
  "Top 50%": [
    "😎 You act chill, but your screen time says otherwise.",
    "🧊 You leave people on read—not because you're mean, just… chill.",
    "🛋️ You're the 'it's whatever' friend, but you care more than you show."
  ],
  "Top 80%": [
    "💖 You pretend you don't care, but you're a total softie inside.",
    "✨ You believe in soulmates (but only admit it at 2am).",
    "📚 You save cute texts and re-read them when you're alone."
  ],
};

// 18문항, 4지선다, 6개 유형 인덱스(0~5)

const TYPE_MAP = [
  // Q1
  [4, 1, 0, 5],
  // Q2
  [0, 1, 2, 4],
  // Q3
  [1, 4, 5, 3],
  // Q4
  [3, 0, 2, 4],
  // Q5
  [0, 3, 5, 2],
  // Q6
  [5, 4, 1, 2],
  // Q7
  [1, 5, 4, 0],
  // Q8
  [5, 4, 3, 2],
  // Q9
  [0, 4, 1, 2],
  // Q10
  [0, 4, 5, 5],
  // Q11
  [1, 0, 2, 4],
  // Q12
  [5, 3, 2, 4],
  // Q13
  [1, 4, 0, 5],
  // Q14
  [1, 0, 4, 2],
  // Q15
  [5, 2, 3, 4],
  // Q16
  [3, 5, 0, 4],
  // Q17
  [2, 1, 4, 0],
  // Q18
  [4, 5, 1, 0],
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
      gtag('retake_test', {
        category: 'relatablegirl',
        label: 'Retake Test Button',
      });
      localStorage.setItem("test-answers", JSON.stringify(Array(18).fill(null)));
      router.push("/relatablegirl/test/1");
    }
  };

  const handleCopy = () => {
    if (!result) {
      setToast("No result yet! Please complete the test first.");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    gtag('copy_share', {
      category: 'relatablegirl',
      label: 'Copy Share Button',
      resultType: result.type,
      resultPercent: result.percent,
    });
    let shareText = "";
    switch (result.percent) {
      case "Top 4%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nApparently, I can overthink for a living. Can you relate? 🙈\nTry to beat my score 👉 https://naviahub.dev/relatablegirl/`;
        break;
      case "Top 10%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nGroup chat is my second home. Who's with me? 💬\nThink you can top this? 👉 https://naviahub.dev/relatablegirl/`;
        break;
      case "Top 20%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nEvery date is a runway show for me. 👗\nCan you out-style me? 👉 https://naviahub.dev/relatablegirl/`;
        break;
      case "Top 30%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nWhy talk when you can meme? 🤪\nBet you can't meme harder! 👉 https://naviahub.dev/relatablegirl/`;
        break;
      case "Top 50%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nChill on the outside, softie on the inside. 😎\nAre you as chill as me? 👉 https://naviahub.dev/relatablegirl/`;
        break;
      case "Top 80%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nSecret romantic alert! 💖\nCan you get more poetic than me? 👉 https://naviahub.dev/relatablegirl/`;
        break;
      default:
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Meme Girl Dating Test!\nhttps://naviahub.dev/relatablegirl/`;
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

  const resultPercent = result?.percent || "Top 80%";
  const resultType = result?.type || "The Secret Romantic";
  const resultEmoji = result?.emoji || "💖";

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
              {resultEmoji} {resultType}
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-[#ff5da2] mb-2 text-center">
              {resultPercent} of all test takers
            </p>
            <br></br>
            <p className="text-lg text-center mb-8 text-white">
              {PRAISES[resultPercent]}
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-6 text-pink-300 tracking-wide leading-snug">
                <span className="mr-2">{resultEmoji}</span>{resultPercent.replace('Top ', '')} {resultType} Type
              </h2>
              <hr className="border-t border-gray-700 mb-6" />
              <ol className="list-decimal list-inside text-gray-200 space-y-3 mt-4 pl-4 mb-15 text-lg">
                {RESULT_FEATURES[result?.percent || "Top 80%"].map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ol>
            </div>
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