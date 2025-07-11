"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { gtag } from "@/app/util/ga";


export const RESULTS = [
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

const RESULT_FEATURES: Record<string, string[]> = {
  "Top 4%": [
    "🤣 You're the one dropping memes before anyone else even gets the joke.",
    "🏷️ Your friends tag you in every viral meme—because you probably made it first.",
    "🔥 You can turn any awkward silence into a group chat roast session."
  ],
  "Top 10%": [
    "⚡ You reply 'LOL' before the message is even sent.",
    "🎯 You shoot your shot in the DMs—no hesitation, no regrets.",
    "🤳 Your friends call you the 'fastest texter in the West.'"
  ],
  "Top 20%": [
    "🧐 You analyze every 'seen' and 'typing…' like it's chess.",
    "📦 You have a meme ready for every possible scenario.",
    "🧠 You're the mastermind behind the group chat's best comebacks."
  ],
  "Top 30%": [
    "👀 You read every message but only reply with a single emoji.",
    "🤫 You know all the drama but never get involved.",
    "💬 Your friends forget you're in the group chat—until you drop a legendary meme."
  ],
  "Top 50%": [
    "📣 You hype up your crush's story like it's the Super Bowl.",
    "🌅 You send good morning texts… and good night memes.",
    "😂 Your friends roast you for catching feelings—again."
  ],
  "Top 80%": [
    "👻 You leave everyone on read for days (or weeks).",
    "🆘 Your friends send 'are you alive?' memes to check in.",
    "🌚 You show up once in a blue moon—just to drop a meme and disappear."
  ],
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

export function getResultFromAnswers(answers: any) {
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
        category: 'relatableguy',
        label: 'Retake Test Button',
      });
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
    gtag('copy_share', {
      category: 'relatableguy',
      label: 'Copy Share Button',
      resultType: result.type,
      resultPercent: result.percent,
    });
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

  const resultPercent = result?.percent || "Top 80%";
  const resultType = result?.type || "The Ghost";
  const resultEmoji = result?.emoji || "👻";
  const resultPraise = PRAISES[resultPercent] || "Ghost Mode: You left her on read since Monday. She's dating someone else now—and it's probably your fault.";
  
  // JSON-LD 스크립트를 위한 데이터 생성
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${resultType} ${resultEmoji} | ${resultPercent} Meme Dating Type`,
    "description": `${resultPraise} Your dating meme type has been revealed! Discover if you're a Comedian 🤣, a Rusher 🚀, or a Ghost 👻 — and share the laughs with friends.`,
    "url": `https://naviahub.dev/relatableguy/result?type=${encodeURIComponent(resultType)}&percent=${encodeURIComponent(resultPercent)}`,
    "image": "/undraw_love_qypu_1200x630.png",
    "inLanguage": "en",
    "audience": {
      "@type": "Audience",
      "audienceType": "Meme Dating Results for Guys"
    },
    "creator": {
      "@type": "Organization",
      "name": "NaviaHub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NaviaHub",
      "url": "https://naviahub.dev"
    },
    "datePublished": "2025-07-03",
    "dateModified": "2025-07-10"
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
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
              {result.percent} of all test takers
            </p>
            <br></br>
            <p className="text-lg text-center mb-8 text-white">
              {PRAISES[result.percent]}
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-6 text-pink-300 tracking-wide leading-snug">
                <span className="mr-2">{resultEmoji}</span>{resultPercent.replace('Top ', '')} {resultType} Type
              </h2>
              <hr className="border-t border-gray-700 mb-6" />
              <ol className="list-decimal list-inside text-gray-200 space-y-3 mt-4 mb-15 pl-4 text-lg">
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
    </>
  );
} 