"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { gtag } from "@/app/util/ga";


export const RESULTS = [
  { type: "The Meme Priest", emoji: "🤣", percent: "Top 4%" },
  { type: "The Speed-Groom", emoji: "🚀", percent: "Top 10%" },
  { type: "The Spreadsheet Fiancé", emoji: "🧠", percent: "Top 20%" },
  { type: "The Chill Groomzilla", emoji: "😎", percent: "Top 30%" },
  { type: "The Maybe Guy", emoji: "🤷‍♂️", percent: "Top 50%" },
  { type: "The Escape Artist", emoji: "👻", percent: "Top 80%" },
];

const PRAISES: Record<string, string> = {
  "Top 4%": "You're the Meme Priest — holy vows, unholy memes. Everyone wants you to officiate their wedding (and run the group chat).",
  "Top 10%": "Speed-Groom alert! You're halfway to the altar before anyone says 'I do'. Bold, fast, and probably forgot the guest list.",
  "Top 20%": "Spreadsheet Fiancé — you've got color-coded budget tabs and honeymoon timelines. You scare and impress people equally.",
  "Top 30%": "Chill Groomzilla — you're laid-back until the cake's wrong. A perfect balance of calm and chaos.",
  "Top 50%": "The Maybe Guy. You're open to the idea… after a few more memes and emotional buffering.",
  "Top 80%": "Escape Artist: you're gone before the bouquet hits the ground. Your mom's been calling since 2022.",
};

const RESULT_FEATURES: Record<string, string[]> = {
  "Top 4%": [
  "📸 You're the guy who memes weddings before they even happen.",
  "🧠 Your group chat trusts you more than Google when it comes to marriage advice.",
  "🤣 You could officiate a wedding and still make it hilarious."
  ],

  "Top 10%": [
   "⚡ Already planning the honeymoon before the first date ends.",
  "📅 You said 'yes' before they even finished the question.",
  "💍 You'd propose with a meme... and somehow pull it off."
  ],

  "Top 20%": [
  "📊 Wedding budget? Color-coded. Guest list? Already filtered.",
  "🧩 You treat marriage like a strategic co-op game.",
  "🧠 You know the ring size and their mom's favorite wine."
  ],

  "Top 30%": [
  "😎 You're chill—until the playlist isn't 'vibe-checked.'",
  "🍰 You care deeply about the cake. Silently.",
  "📱 People think you're passive... until your group chat goes off."
  ],

  "Top 50%": [
  "🤔 You're not against marriage… just not today.",
  "🍕 You'd marry someone for shared pizza delivery.",
  "📉 One day you plan a wedding, next day you ghost the florist."
  ],

  "Top 80%": [
  "🚪 You leave weddings like you leave group chats—silently.",
  "📵 You're 'read-only' in all relationship convos.",
  "🗓️ You've been dodging 'So when are you next?' since 2022."
  ],
};

const HASHTAGS: Record<string, string> = {
  "Top 4%": "#MemePriest #HolyRoast",
  "Top 10%": "#SpeedGroom #ZoomToTheAltar",
  "Top 20%": "#SpreadsheetFiancé #MemePlanner",
  "Top 30%": "#ChillGroom #CakeMatters",
  "Top 50%": "#MaybeGroom #IDontNotWanna",
  "Top 80%": "#MemeGhost #DodgedTheBouquet",
};

// 18문항, 4지선다, 6개 유형 인덱스(0~5)
// 0: Comedian, 1: Rusher, 2: Strategist, 3: Observer, 4: Simp, 5: Ghost
const TYPE_MAP = [
  // Q1
  [1, 2, 3, 5], // Q1

  [4, 0, 5, 1], // Q2
  
  [4, 3, 2, 0], // Q3

  [3, 5, 2, 0], // Q4

  [4, 1, 5, 2], // Q5

  [0, 1, 4, 3], // Q6

  [5, 4, 1, 2], // Q7

  [3, 0, 4, 1], // Q8

  [5, 3, 0, 2], // Q9

  [3, 5, 2, 1], // Q10

  [4, 0, 2, 3], // Q11

  [5, 0, 4, 1], // Q12

  [5, 0, 1, 3], // Q13

  [2, 4, 1, 5], // Q14

  [3, 4, 0, 2], // Q15

  [2, 5, 1, 0], // Q16

  [4, 3, 0, 1], // Q17

  [4, 2, 5, 3], // Q18
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
        category: 'marriageguy',
        label: 'Retake Test Button',
      });
      localStorage.setItem("test-answers", JSON.stringify(Array(18).fill(null)));
      router.push("/marriageguy/test/1");
    }
  };

  const handleCopy = () => {
    if (!result) {
      setToast("No result yet! Please complete the test first.");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    gtag('copy_share', {
      category: 'marriageguy',
      label: 'Copy Share Button',
      resultType: result.type,
      resultPercent: result.percent,
    });
    let shareText = "";
    
    switch (result.percent) {
      case "Top 4%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nThey want me to officiate AND run the group chat. 💍🤣\nYour turn, meme mortal 👉 https://naviahub.dev/marriageguy/`;
        break;
      case "Top 10%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nI'm halfway to the altar—with memes in hand. 🚀\nThink you can meme it better? 👉 https://naviahub.dev/marriageguy/`;
        break;
      case "Top 20%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nBudget? Spreadsheet. Cake? Already picked. Meme game? Solid. 📊\nCan you out-plan me? 👉 https://naviahub.dev/marriageguy/`;
        break;
      case "Top 30%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nChill vibes only—until someone messes with the playlist. 😎\nTry it yourself 👉 https://naviahub.dev/marriageguy/`;
        break;
      case "Top 50%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nNot rushing, not running. Just meme-thinking about it. 🤷‍♂️\nWanna know your type? 👉 https://naviahub.dev/marriageguy/`;
        break;
      case "Top 80%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nAlready ghosted 3 weddings and 5 group chats this year. 👻\nYour turn to face the aisle 👉 https://naviahub.dev/marriageguy/`;
        break;
      default:
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test!\nhttps://naviahub.dev/marriageguy/`;
    }
    shareText += `\n\n${HASHTAGS[result.percent] || "#MarriageMemeTest #MemeMarriage"}`;

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
  const resultPraise = PRAISES[resultPercent] || "Escape Artist: you're gone before the bouquet hits the ground. Your mom's been calling since 2022.";
  
  // JSON-LD 스크립트를 위한 데이터 생성
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${resultType} ${resultEmoji} | ${resultPercent} Meme Marriage Type`,
    "description": `${resultPraise} Take the Marriage Meme Test and share your chaotic wedding energy!`,
    "url": `https://naviahub.dev/marriageguy/result?type=${encodeURIComponent(resultType)}&percent=${encodeURIComponent(resultPercent)}`,
    "image": "https://naviahub.dev/undraw_wedding_qt3q_1200x630.png",
    "inLanguage": "en",
    "audience": {
      "@type": "Audience",
      "audienceType": "Men interested in memes and marriage"
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
    "datePublished": "2025-07-08",
    "dateModified": "2025-07-09"
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