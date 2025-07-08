"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

const PINK = "#ffb6d5"; // 연한 핑크
const PINK_HOVER = "#ffc6e0";
const PINK_BORDER = "#ffb6d5";

const PARTS = [
  [//1번부터 6번
    {
      section: "Expectations vs Reality",
      question: "Your mom asks, 'When will you get married?'",
      example: "At dinner, your mom hits you with the classic question.",
      options: [
        { text: "Let me finish this game first.", emoji: "🎮" },
        { text: "'Soon!' (You liar.)", emoji: "😅" },
        { text: "Change subject immediately.", emoji: "💨" },
        { text: "Just laugh awkwardly.", emoji: "😂" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "You get invited to another wedding.",
      example: "Another friend just got engaged. Invitation lands in your inbox.",
      options: [
        { text: "Free food? I'm in.", emoji: "🍖" },
        { text: "Sigh... another gift.", emoji: "💸" },
        { text: "One more down. Who's next?", emoji: "😏" },
        { text: "Send meme. Skip event.", emoji: "📱" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "What scares you most about marriage?",
      example: "You're thinking about marriage. What's the real fear?",
      options: [
        { text: "Losing my freedom.", emoji: "🕊️" },
        { text: "The cost. Please, no.", emoji: "💸" },
        { text: "Matching outfits.", emoji: "🧦" },
        { text: "In-laws... yikes.", emoji: "😳" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "Your bro says, 'Marriage is the best.' You...",
      example: "Your married friend starts praising marriage.",
      options: [
        { text: "Smile and nod.", emoji: "🙂" },
        { text: "Ask for the real story.", emoji: "🕵️‍♂️" },
        { text: "Send him a divorce meme.", emoji: "📱" },
        { text: "Change topic, fast.", emoji: "💨" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "What's your biggest reason to get married?",
      example: "Deep down... why even consider it?",
      options: [
        { text: "Tax benefits.", emoji: "🧾" },
        { text: "Netflix partner secured.", emoji: "🍿" },
        { text: "Family pressure.", emoji: "👨‍👩‍👦" },
        { text: "No idea, honestly.", emoji: "🤷‍♂️" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "Ideal wedding?",
      example: "You actually imagine your wedding day.",
      options: [
        { text: "Small, chill, cheap.", emoji: "😎" },
        { text: "Big chaotic party!", emoji: "🎉" },
        { text: "Vegas, baby.", emoji: "🎰" },
        { text: "Just sign the paper and bounce.", emoji: "📝" },
      ],
    },
  ],


  [//7번부터 12번
    {
      section: "Planning? Or Panicking?",
      question: "Your partner brings up matching couple rings.",
      example: "They ask: Should we get rings... that match?",
      options: [
        { text: "Sure, why not.", emoji: "💍" },
        { text: "Only if I pick the design.", emoji: "🎨" },
        { text: "Uh... do we have to?", emoji: "😬" },
        { text: "Let's get meme rings.", emoji: "🤣" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "They say: 'Let's have a huge wedding!'",
      example: "They're excited. You're... not sure.",
      options: [
        { text: "Smile and slowly panic.", emoji: "😅" },
        { text: "Negotiate smaller scale.", emoji: "🤝" },
        { text: "Sure... (Internally screaming)", emoji: "😱" },
        { text: "Suggest eloping instead.", emoji: "🏃‍♂️" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "What's your take on wedding TikToks?",
      example: "You scroll and see another viral wedding dance.",
      options: [
        { text: "Saving this. Might need it?", emoji: "💾" },
        { text: "Send to group chat. LMAO.", emoji: "🤣" },
        { text: "Scroll right past.", emoji: "👉" },
        { text: "'Goals' — but said ironically.", emoji: "😏" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "You imagine a honeymoon. What's the vibe?",
      example: "You actually picture a honeymoon.",
      options: [
        { text: "Beach, chill, naps.", emoji: "🏖️" },
        { text: "Adventure mode!", emoji: "🏔️" },
        { text: "Home + zero people.", emoji: "🛋️" },
        { text: "Anywhere with WiFi.", emoji: "📶" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "You and your partner fight over wedding food. What now?",
      example: "They want fancy dishes. You just want pizza.",
      options: [
        { text: "Compromise like a champ.", emoji: "🤝" },
        { text: "Let them win.", emoji: "😇" },
        { text: "Secretly order my own menu.", emoji: "🍕" },
        { text: "Suggest ramen bar. Boom.", emoji: "🍜" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "Your friend's speech at your wedding goes viral (bad way).",
      example: "It was supposed to be sweet... now it's a meme.",
      options: [
        { text: "Laugh it off. It's iconic.", emoji: "😂" },
        { text: "Delete the video ASAP.", emoji: "🗑️" },
        { text: "Cry inside.", emoji: "😭" },
        { text: "Use it to start a podcast.", emoji: "🎙️" },
      ],
    },
  ],

  [//13번부터 18번
    {
      section: "Marriage: The Existential Edition",
      question: "How do you feel about joint bank accounts?",
      example: "Your partner brings up merging finances.",
      options: [
        { text: "Sure, full trust!", emoji: "💳" },
        { text: "Only if I track every cent.", emoji: "📊" },
        { text: "I need a secret fund too.", emoji: "🕵️‍♂️" },
        { text: "No thanks. Cash is freedom.", emoji: "💸" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "They post a couple photo with you. Public.",
      example: "Suddenly, your face is on their feed.",
      options: [
        { text: "Like + cool comment.", emoji: "👍" },
        { text: "Panic slightly, then repost.", emoji: "😅" },
        { text: "Message: 'pls delete lol'", emoji: "📲" },
        { text: "Disappear for 3 days.", emoji: "🙈" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "They ask: 'Where do you see us in 5 years?'",
      example: "Deep talk hits. What's your response?",
      options: [
        { text: "Together. Maybe.", emoji: "🤔" },
        { text: "Living... somewhere cheap?", emoji: "🏠" },
        { text: "Still thinking about that...", emoji: "⏳" },
        { text: "I'm buffering. Pls wait.", emoji: "🌀" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "They suggest couple therapy — casually.",
      example: "You two had a minor fight.",
      options: [
        { text: "Agree calmly.", emoji: "🧘" },
        { text: "Panic, are we breaking up?", emoji: "😨" },
        { text: "Say yes. Then Google it secretly.", emoji: "🔍" },
        { text: "Ghost mode activated.", emoji: "👻" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "Marriage = forever. How do you feel?",
      example: "Someone says: 'Till death do us part.'",
      options: [
        { text: "Romantic, actually.", emoji: "💘" },
        { text: "That's a long time bro...", emoji: "😳" },
        { text: "Haha... funny concept.", emoji: "🤣" },
        { text: "No thoughts. Head empty.", emoji: "🧠" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "You watch a cheesy wedding movie. What now?",
      example: "The ending scene is super emotional.",
      options: [
        { text: "Pretend it's cringe.", emoji: "😐" },
        { text: "Lowkey got emotional.", emoji: "🥲" },
        { text: "Send meme reaction.", emoji: "📱" },
        { text: "Now I want popcorn.", emoji: "🍿" },
      ],
    },
  ],
];

const SECTION_LABELS = ["Pressure & Reality", "Planning Chaos", "Life After 'I Do'"];

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const partParam = params.part;
  const partIdx = typeof partParam === "string" ? Number(partParam) - 1 : Array.isArray(partParam) ? Number(partParam[0]) - 1 : 0;

  // partIdx가 0,1,2가 아니면 404 안내
  if (partIdx < 0 || partIdx > 2) {
    return <div className="text-center text-2xl mt-20">404 Not Found</div>;
  }

  const [answers, setAnswers] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("test-answers");
      if (saved) return JSON.parse(saved);
    }
    return Array(PARTS.flat().length).fill(null);
  });
  const currentQuestions = PARTS[partIdx];
  const offset = partIdx * 6;

  // answers 상태를 localStorage에 저장만 한다
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("test-answers", JSON.stringify(answers));
    }
  }, [answers]);

  const goNext = () => {
    if (partIdx < 2) {
      router.push(`/marriageguy/test/${partIdx + 2}`);
      if (typeof window !== "undefined") {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }
    } else {
      router.push("/marriageguy/result"); // 마지막 파트에서 결과 페이지로 이동(필요시)
    }
  };

  const totalQuestions = PARTS.flat().length;
  const answeredCount = answers.filter((a: number | null) => a !== null).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const [isSliding, setIsSliding] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const handleNext = () => {
    if (partIdx === 2) {
      setIsBlinking(true);
      setTimeout(() => {
        goNext();
      }, 220);
    } else {
      setIsSliding(true);
      setTimeout(() => {
        goNext();
        setIsSliding(false);
      }, 600); // 슬라이드 애니메이션 시간
    }
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://naviahub.dev/marriageguy/test/${partParam}`} />
        <meta name="description" content="Marriage Meme Test in progress! Answer hilarious questions and discover your wedding meme type soon. Will you be a Meme Priest, Speed-Groom, or Ghost? 😂💍" />
      </Head>
      
      <div className="min-h-screen bg-[#18171a] flex flex-col items-center px-2 pb-10" style={{ color: PINK }}>
        {/* 상단 sticky 진행도 */}
        <div className="w-full max-w-2xl mx-auto mt-0 sticky top-0 z-20 bg-[#18171a] shadow-md shadow-black/10" style={{ color: PINK }}>
          <div className="pt-6" />
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm" style={{ color: PINK, fontWeight: "600", letterSpacing: "0.1em" }}>Progress</span>
            <span className="text-xs" style={{ color: PINK }}>{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-[#232228] rounded-full mb-4">
            <div className="h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%`, background: PINK }} />
          </div>
          <div className="flex justify-between items-center mb-8">
            {SECTION_LABELS.map((label, idx) => (
              <div key={label} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-bold text-lg mb-1 ${idx === partIdx ? "bg-[#18171a]" : "bg-[#232228]"}`}
                  style={{ borderColor: idx === partIdx ? PINK : "#555", color: idx === partIdx ? PINK : "#555" }}>
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold" style={{ color: idx === partIdx ? PINK : PINK }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={partIdx}
            initial={{ x: 0, skewX: 0, opacity: 1 }}
            animate={
              isSliding
                ? { x: "100vw", skewX: 12, opacity: 0 }
                : { x: 0, skewX: 0, opacity: 1 }
            }
            exit={{ x: "-100vw", skewX: -12, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.8, 0.2, 1] }}
          >
            {/* 질문 리스트 */}
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
              {currentQuestions.map((q, idx) => (
                <div key={idx} className="bg-[#232228] rounded-3xl p-6 shadow flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-lg font-bold mb-1" style={{ color: PINK }}>
                    <span className="text-2xl">{partIdx === 0 ? "🤣" : partIdx === 1 ? "🧠" : "💬"}</span>
                    <span>{offset + idx + 1}. {q.question}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="font-bold" style={{ color: PINK }}>📌 Example</span>
                    <span style={{ color: PINK }}>{q.example}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {q.options.map((opt, oidx) => (
                      <button
                        key={opt.text}
                        className={`w-full py-3 rounded-xl border-2 text-base font-semibold transition-colors duration-150`}
                        style={{
                          background: answers[offset + idx] === oidx ? PINK : "transparent",
                          borderColor: PINK_BORDER,
                          color: answers[offset + idx] === oidx ? "#fff" : PINK,
                        }}
                        onClick={() => setAnswers((a: (number|null)[]) => a.map((v: number|null, i: number) => i === offset + idx ? oidx : v))}
                      >
                        <span className="mr-2 text-base font-semibold" style={{ color: answers[offset + idx] === oidx ? "#fff" : PINK }}>{String.fromCharCode(65 + oidx)}</span>
                        <span className="mr-2 text-base">{opt.emoji}</span>
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* 하단 다음/결과 버튼 */}
            <div className="w-full max-w-2xl mx-auto mt-10 flex justify-center">
              <button
                className="w-full py-4 rounded-3xl text-xl font-bold shadow-lg transition-colors duration-200 disabled:opacity-50"
                style={{ background: PINK, color: "#fff" }}
                disabled={currentQuestions.some((_, idx) => answers[offset + idx] === null) || isSliding || isBlinking}
                onClick={handleNext}
              >
                {partIdx === 2 ? "See Results" : "Next"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Blink 오버레이 */}
        {isBlinking && (
          <div className="fixed inset-0 z-50 bg-black opacity-90 pointer-events-none animate-blink" />
        )}
        <style jsx global>{`
          @keyframes blink {
            0% { opacity: 0; }
            20% { opacity: 0.9; }
            80% { opacity: 0.9; }
            100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.22s linear forwards;
          }
        `}</style>
      </div>
    </>
  );
} 