"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { gtag } from "@/app/util/ga";
import Head from "next/head";

const RESULTS = [
  { type: "The Group Chat Bride", emoji: "📱", percent: "Top 4%" },
  { type: "The Pinterest Dreamer", emoji: "💅", percent: "Top 10%" },
  { type: "The Spreadsheet Queen", emoji: "📊", percent: "Top 20%" },
  { type: "The Chill Control Freak", emoji: "😎", percent: "Top 30%" },
  { type: "The Maybe Girl", emoji: "🤷‍♀️", percent: "Top 50%" },
  { type: "The Ghost of Commitment", emoji: "👻", percent: "Top 80%" },
];

const PRAISES: Record<string, string> = {
  "Top 4%": "You're the Group Chat Bride — wedding planning *and* memes queen. Your bridal mood board is viral, and so are your reactions.",
  "Top 10%": "Pinterest Dreamer — you’ve got 5 wedding boards, no date, and an eye for dreamy tablescapes. ✨ Manifesting hard.",
  "Top 20%": "Spreadsheet Queen — budgets, guest list, and vibe all color-coded. You terrify and inspire your group equally.",
  "Top 30%": "Chill Control Freak — calm on the outside, spiral planner on the inside. You act casual but need floral symmetry.",
  "Top 50%": "The Maybe Girl. You’re open to love, but also open to snacks and sleep. Marriage? We'll circle back.",
  "Top 80%": "Ghost of Commitment — seen wedding pics, replied 'LMAO', disappeared. You’ve been ‘thinking about it’ since 2021.",
};

const RESULT_FEATURES: Record<string, string[]> = {
 "Top 4%": [
    "📸 Your wedding mood board is more organized than your real life.",
    "📱 Your group chat calls you ‘Bridezilla’ — lovingly. Maybe.",
    "🤣 You could plan a viral wedding and meme it at the same time.",
  ],

  "Top 10%": [
    "💍 You’ve saved 47 rings to your Pinterest. Still single, but hopeful.",
    "💅 You said 'yes'… in your head… during your second Hinge date.",
    "📸 You'd do a sunset proposal shoot — even if it’s just staged for fun.",
  ],

  "Top 20%": [
    "📊 Wedding spreadsheet = life spreadsheet. Color-coded vibes only.",
    "🧠 You researched 12 venues before even agreeing to date someone.",
    "🎯 You know the theme, hashtag, and the guest limit — max 75.",
  ],

  "Top 30%": [
    "😎 You're chill — until someone picks the wrong shade of mauve.",
    "🍰 You say 'whatever works' but have strong opinions on cake tiers.",
    "📱 People think you’re relaxed… until your secret Notion doc loads.",
  ],

  "Top 50%": [
    "🤔 You’re not against marriage. You’re just… emotionally buffering.",
    "🍕 You’d marry someone who shares their fries *and* their Netflix.",
    "📆 One day you're crying at wedding TikToks, next day you're ghosting your crush.",
  ],

  "Top 80%": [
    "👻 You reply ‘LMAO’ to wedding pics and log off.",
    "📵 Group chat says ‘She’s not coming’ and they’re right.",
    "🧃 You've been avoiding 'So when’s your turn?' since forever.",
  ],
};

const HASHTAGS: Record<string, string> = {
  "Top 4%": "#GroupChatBride #MoodBoardBoss",
  "Top 10%": "#PinterestDreamer #FutureMrsKinda",
  "Top 20%": "#SpreadsheetQueen #BrideWithAPlan",
  "Top 30%": "#ChillControlFreak #DontTouchMyCake",
  "Top 50%": "#MaybeGirlVibes #IDKMaybeLOL",
  "Top 80%": "#CommitmentGhost #LeftOnReadSince2021",
};

// 18문항, 4지선다, 6개 유형 인덱스(0~5)
// 0: Comedian, 1: Rusher, 2: Strategist, 3: Observer, 4: Simp, 5: Ghost
const TYPE_MAP = [
  [1, 1, 4, 5], // Q1: '언제 결혼하니?' - 꿈/회피 반응

  [1, 3, 4, 5], // Q2: 결혼식 초대장 - 로망 vs 회피

  [4, 1, 2, 5], // Q3: 결혼의 두려움 - 자유/부담/관리/회피

  [0, 1, 0, 5], // Q4: 친구의 결혼찬양 - 리액션형 vs 도망

  [0, 1, 4, 5], // Q5: 결혼 이유 - 감정형 + 애매함

  [1, 0, 1, 4], // Q6: 결혼식 이미지 상상

  [0, 1, 4, 5], // Q7: 커플링 반응

  [4, 3, 5, 1], // Q8: '크게 하자'는 말에 대한 반응

  [1, 0, 4, 3], // Q9: 웨딩 틱톡 반응

  [1, 0, 4, 2], // Q10: 허니문 상상

  [2, 4, 5, 1], // Q11: 음식 갈등

  [0, 5, 4, 1], // Q12: 친구 축사 망한 상황

  [2, 2, 4, 5], // Q13: 합산계좌 얘기

  [1, 0, 4, 5], // Q14: 커플사진 공개

  [4, 1, 4, 5], // Q15: 미래 질문

  [2, 5, 4, 0], // Q16: 커플 테라피

  [0, 4, 5, 1], // Q17: 결혼 = 영원

  [1, 4, 0, 5], // Q18: 치즈 영화 반응
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
        category: 'marriagegirl',
        label: 'Retake Test Button',
      });
      localStorage.setItem("test-answers", JSON.stringify(Array(18).fill(null)));
      router.push("/marriagegirl/test/1");
    }
  };

  const handleCopy = () => {
    if (!result) {
      setToast("No result yet! Please complete the test first.");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    gtag('copy_share', {
      category: 'marriagegirl',
      label: 'Copy Share Button',
      resultType: result.type,
      resultPercent: result.percent,
    });
    let shareText = "";
    
    switch (result.percent) {
      case "Top 4%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nI plan weddings and run group chats — all with memes. 👑📱\nWhat’s your bridal energy? 👉 https://naviahub.dev/marriagegirl/`;
        break;
      case "Top 10%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nNo ring, but 47 saved on Pinterest. 💅💍\nSee what kind of bride you are 👉 https://naviahub.dev/marriagegirl/`;
        break;
      case "Top 20%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nGuest list? Sorted. Budget? Color-coded. Snacks? Prioritized. 📊\nCan you plan it better? 👉 https://naviahub.dev/marriagegirl/`;
        break;
      case "Top 30%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nI'm chill… until someone touches the cake design. 🎂😎\nCheck your wedding vibe 👉 https://naviahub.dev/marriagegirl/`;
        break;
      case "Top 50%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nMarriage? IDK… I’m emotionally buffering. 🤷‍♀️\nFind your meme bride type 👉 https://naviahub.dev/marriagegirl/`;
        break;
      case "Top 80%":
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test.\nGhosted 3 wedding convos this week alone. 👻💬\nWanna know your bridal meme energy? 👉 https://naviahub.dev/marriagegirl/`;
        break;
      default:
        shareText = `I just got "${result.type}" ${result.emoji} (${result.percent}) on the Marriage Meme Test!\nhttps://naviahub.dev/marriagegirl/`;
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

  return (
    <>
      <Head>
        <title>Pinterest Bride ✨ | Top 4% Meme Marriage Type 😂💍</title>
        <link rel="canonical" href="https://naviahub.dev/marriagegirl/result" />
        <meta name="description" content="Only 4% got this! You're officially a Pinterest Bride — the rarest bridal meme type. 💅 Discover what it says about you and share the result!" />

        <meta name="robots" content="index, follow" />
  
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Pinterest Bride ✨ | Top 4% Meme Marriage Type",
        "description": "Only 4% got this! You're officially a Pinterest Bride — the rarest bridal meme type. 💅 Discover what it says about you and share the result!",
        "url": "https://naviahub.dev/marriagegirl/result",
        "image": "https://naviahub.dev/undraw_wedding_qt3q_1200x630.png",
        "inLanguage": "en",
        "audience": {
          "@type": "Audience",
          "audienceType": "Women interested in memes and marriage"
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
        "datePublished": "2025-07-09",
        "dateModified": "2025-07-09"
      }
    ` }} />
      </Head>

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