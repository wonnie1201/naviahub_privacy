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
      question: "Your mom asks, 'So… when’s the wedding?'",
      example: "Dinner with family. The question drops — again.",
      options: [
        { text: "Smile and say 'Manifesting!'", emoji: "✨" },
        { text: "'Ask the universe, mom.'", emoji: "🌌" },
        { text: "Laugh and change subject.", emoji: "💨" },
        { text: "Just sip water aggressively.", emoji: "🥤" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "Another wedding invite arrives.",
      example: "Bridal shower. Again. Inbox says RSVP.",
      options: [
        { text: "Cute dress moment? I'm in.", emoji: "👗" },
        { text: "Send gift, skip drama.", emoji: "🎁" },
        { text: "'Yay, love wins… again.'", emoji: "😬" },
        { text: "Fake busy. Watch Netflix.", emoji: "📺" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "What's your biggest fear about marriage?",
      example: "You imagine married life. What's scary?",
      options: [
        { text: "Losing my independence.", emoji: "🕊️" },
        { text: "The pressure to be perfect.", emoji: "🎯" },
        { text: "Couple social media cringe.", emoji: "📸" },
        { text: "In-laws + group chats.", emoji: "🙃" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "Your friend says, 'Marriage is amazing!'",
      example: "She’s glowing. Married life is great… apparently.",
      options: [
        { text: "Smile. Say 'Love that for you!'", emoji: "😊" },
        { text: "Ask how often she cries tho.", emoji: "👀" },
        { text: "Send her a marriage meme.", emoji: "📱" },
        { text: "Mentally exit the convo.", emoji: "🚪" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "Why would you even consider marriage?",
      example: "You actually think about it. Be honest.",
      options: [
        { text: "Emotional support partner.", emoji: "🤝" },
        { text: "Matching pajamas forever.", emoji: "🧸" },
        { text: "Family kinda expects it.", emoji: "👨‍👩‍👧" },
        { text: "Honestly? No clue.", emoji: "🤷‍♀️" },
      ],
    },
    {
      section: "Expectations vs Reality",
      question: "Your dream wedding vibe?",
      example: "You imagine your big day… sorta.",
      options: [
        { text: "Garden, chill, film camera only.", emoji: "🌿" },
        { text: "Big dramatic energy. Champagne tower!", emoji: "🥂" },
        { text: "Paris elopement moment.", emoji: "✈️" },
        { text: "Just us and the paperwork.", emoji: "📝" },
      ],
    },
  ],


  [//7번부터 12번
    {
      section: "Planning? Or Panicking?",
      question: "They bring up matching couple rings.",
      example: "You're having coffee and they say: 'Let’s get rings. Matching ones.'",
      options: [
        { text: "Awww, okay! 💖", emoji: "💍" },
        { text: "Only if mine has sparkle.", emoji: "💎" },
        { text: "Matching? Like... always?", emoji: "😬" },
        { text: "What if we get meme rings?", emoji: "🤣" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "'I want a big wedding,' they say.",
      example: "They're hyped. You're… less so.",
      options: [
        { text: "Haha... we’ll see.", emoji: "😅" },
        { text: "Counter offer: tiny garden vibe.", emoji: "🌸" },
        { text: "'Big' like... how big?", emoji: "👀" },
        { text: "I suggest micro-wedding + dogs.", emoji: "🐶" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "You see another wedding TikTok.",
      example: "Dance, drone shots, tears... you scroll past.",
      options: [
        { text: "Saving it. Future maybe?", emoji: "💾" },
        { text: "Sending this to the group chat rn.", emoji: "📱" },
        { text: "Keep scrolling. Not today.", emoji: "👉" },
        { text: "It's cute... ironically.", emoji: "😏" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "You picture your honeymoon.",
      example: "Your brain drifts to post-wedding bliss.",
      options: [
        { text: "Maldives. Hammock. Coconut.", emoji: "🏖️" },
        { text: "Road trip playlist & chaos.", emoji: "🚗" },
        { text: "Staycation + silence.", emoji: "🛋️" },
        { text: "Anywhere with AC and snacks.", emoji: "🍫" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "Wedding food debate begins.",
      example: "They want oysters. You want fries.",
      options: [
        { text: "Let’s make a fusion menu!", emoji: "🍣" },
        { text: "They can choose. I’ll handle dessert.", emoji: "🧁" },
        { text: "I’m ordering my own late-night pizza.", emoji: "🍕" },
        { text: "Suggest taco bar. No regrets.", emoji: "🌮" },
      ],
    },
    {
      section: "Planning? Or Panicking?",
      question: "Your bestie's speech goes viral... for the wrong reasons.",
      example: "It was sweet... until it wasn’t.",
      options: [
        { text: "Iconic. We’re famous now.", emoji: "😂" },
        { text: "Delete. Now. Everywhere.", emoji: "🗑️" },
        { text: "Internally screaming.", emoji: "😖" },
        { text: "Milk it. Turn into a TikTok series.", emoji: "🎥" },
      ],
    },
  ],

  [//13번부터 18번
    {
      section: "Marriage: The Existential Edition",
      question: "Joint bank account talk begins.",
      example: "They say: 'Should we combine finances?'",
      options: [
        { text: "If love = trust, then okay.", emoji: "💳" },
        { text: "I’m tracking everything though.", emoji: "📊" },
        { text: "Secret savings fund, obviously.", emoji: "🕵️‍♀️" },
        { text: "Let me keep my chaos card.", emoji: "💸" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "They post a couple pic — with a mushy caption.",
      example: "You see it. You’re tagged.",
      options: [
        { text: "Like + comment something cute.", emoji: "💗" },
        { text: "Repost it like a good sport.", emoji: "😅" },
        { text: "'Ummm... can you archive that?'", emoji: "📲" },
        { text: "Log off for 3 days.", emoji: "🙈" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "'Where do you see us in 5 years?' they ask.",
      example: "You're watching Netflix. Suddenly: deep talk.",
      options: [
        { text: "Together, maybe with plants.", emoji: "🪴" },
        { text: "Somewhere cute and cheap.", emoji: "🏡" },
        { text: "Uhhh… pass?", emoji: "⏳" },
        { text: "Loading… please wait.", emoji: "🌀" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "They suggest couple therapy. Casually.",
      example: "You had a small fight about... dish soap.",
      options: [
        { text: "Therapy? Love that.", emoji: "🧘‍♀️" },
        { text: "Are we in trouble??", emoji: "😨" },
        { text: "Sure. Then Google: ‘how it works’", emoji: "🔍" },
        { text: "Disappear into meme hole.", emoji: "👻" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "Marriage = forever. Your take?",
      example: "'Till death do us part' hits different.",
      options: [
        { text: "Sounds kinda romantic tbh.", emoji: "💘" },
        { text: "Ehhh... that’s a *long* time.", emoji: "😳" },
        { text: "Haha... bold of you to assume.", emoji: "🤣" },
        { text: "Forever? I don’t even finish series.", emoji: "📺" },
      ],
    },
    {
      section: "Marriage: The Existential Edition",
      question: "You watch a super cheesy wedding movie.",
      example: "The final kiss. Slow music. Fade to white.",
      options: [
        { text: "It's cringe but I cried.", emoji: "🥲" },
        { text: "Pretend not to care.", emoji: "😐" },
        { text: "Send a meme reaction instantly.", emoji: "📱" },
        { text: "Now I want wedding cake.", emoji: "🍰" },
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
      router.push(`/marriagegirl/test/${partIdx + 2}`);
      if (typeof window !== "undefined") {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }
    } else {
      router.push("/marriagegirl/result"); // 마지막 파트에서 결과 페이지로 이동(필요시)
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
        <link rel="canonical" href={`https://naviahub.dev/marriagegirl/test/${partParam}`} />
        <meta name="description" content="Marriage Meme Test in progress! 💍 Answer brutally relatable questions and reveal your bridal meme energy soon. Are you a Pinterest Bride, Panic Queen, or Commitment Ghost? 😂" />
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