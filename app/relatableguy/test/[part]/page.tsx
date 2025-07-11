"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RESULTS, getResultFromAnswers } from "../../result/page"; 

const PINK = "#ffb6d5"; // 연한 핑크
const PINK_HOVER = "#ffc6e0";
const PINK_BORDER = "#ffb6d5";

const PARTS = [
  [ // 1~6번
    {
      section: "Dating Meme Situation",
      question: "First date, your date is 10 minutes late. What do you do?",
      example: "First meeting, your date shows up 10 minutes late.",
      options: [
        { text: "No worries, I just got here too. (lying)", emoji: "😎" },
        { text: "Should've been late too, lol.", emoji: "😏" },
        { text: "Just scrolling my phone, pretending to be chill.", emoji: "📱" },
        { text: "Already want to go home... but gotta act cool.", emoji: "😑" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Your crush replies to your DM after 3 hours. What's your move?",
      example: "You sent a DM to your crush, and they reply 3 hours later.",
      options: [
        { text: "Pride mode ON. I'll reply after 3 hours too.", emoji: "🕒" },
        { text: "Screenshot and drop it in the group chat: 'bruh, is this for real?'", emoji: "📸" },
        { text: "Act cool, but later cringe in bed at 3am.", emoji: "🛌" },
        { text: "Welp, it's over. Time to escape into gaming.", emoji: "🎮" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Your friend confesses they like your crush. What now?",
      example: "Your close friend says they like the person you have a crush on.",
      options: [
        { text: "Play it cool: 'Oh, nice~' but dying inside.", emoji: "😬" },
        { text: "Rival mode ON. 'This means war.'", emoji: "⚔️" },
        { text: "Pretend I don't care, but I care a LOT.", emoji: "😶" },
        { text: "Secretly jealous, but never show it.", emoji: "😒" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Your date suddenly brings up their ex. How do you react?",
      example: "During a date, your date suddenly starts talking about their ex.",
      options: [
        { text: "Pretend it's nothing, but my brain is melting.", emoji: "😳" },
        { text: "If it gets awkward, sip my drink.", emoji: "🥤" },
        { text: "Bring up my own ex for revenge.", emoji: "🔥" },
        { text: "'Ah~' and quickly change the subject.", emoji: "💨" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "They say, 'I just want to be alone for a while.' What do you do?",
      example: "They suddenly say they want to be alone for a while.",
      options: [
        { text: "Actually give them space. Gotta act like a chill guy.", emoji: "🕶️" },
        { text: "Panic and ask my bro, 'Did I just get dumped?'", emoji: "📱" },
        { text: "Say 'okay~' but keep overthinking it.", emoji: "🤔" },
        { text: "Open a dating app immediately, lol.", emoji: "📲" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You match with someone super hot on a dating app. What's your move?",
      example: "You matched with someone super attractive on a dating app.",
      options: [
        { text: "Smash the like button first, ask questions later.", emoji: "❤️" },
        { text: "Stare at the chat for 10 minutes, then chicken out.", emoji: "😅" },
        { text: "Brag to my friends + ask, 'is this even real?'", emoji: "🤨" },
        { text: "Google them to check if it's a fake account.", emoji: "🔍" },
      ],
    },
  ],
  [ // 7~12번
    {
      section: "Dating Meme Situation",
      question: "Awkward silence during a date. What do you do?",
      example: "Suddenly, the conversation stops and there's an awkward silence on your date.",
      options: [
        { text: "Try to break the ice, but make it even more awkward.", emoji: "😬" },
        { text: "Just scroll my phone and wait it out.", emoji: "📱" },
        { text: "Wait for them to say something first.", emoji: "⏳" },
        { text: "Just hope it ends soon.", emoji: "😑" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "They cancel your date last minute. What's your move?",
      example: "The day you were looking forward to, they text that they're too tired to meet.",
      options: [
        { text: "Laugh it off, go home and play games.", emoji: "🎮" },
        { text: "Feel a bit sad and rant to my bro.", emoji: "��" },
        { text: "Get suspicious and drop a screenshot in the group chat.", emoji: "📸" },
        { text: "Instantly make other plans.", emoji: "📅" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Your situationship is chatting with another guy. How do you react?",
      example: "You see the person you're talking to having a friendly chat with another guy.",
      options: [
        { text: "Pretend I don't care, but I care a LOT.", emoji: "😶" },
        { text: "Get jealous but say nothing.", emoji: "😑" },
        { text: "Get salty and text less.", emoji: "😒" },
        { text: "Confront them directly (and regret it later).", emoji: "😡" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "They only reply with emojis. What do you do?",
      example: "They only send emojis in response to your messages.",
      options: [
        { text: "Reply with just emojis too.", emoji: "😐" },
        { text: "Feel the distance.", emoji: "🧊" },
        { text: "Send an even funnier meme in return.", emoji: "😂" },
        { text: "Don't reply (pride).", emoji: "😤" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Your bro asks for dating advice. What do you do?",
      example: "Your friend suddenly starts talking about their dating problems.",
      options: [
        { text: "Give serious advice, but end with a meme.", emoji: "🧐" },
        { text: "Just reply with a meme.", emoji: "🤣" },
        { text: "Change the topic to my own love life.", emoji: "😏" },
        { text: "Just keep saying 'just shoot your shot.'", emoji: "🙄" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "The bill comes out of nowhere during a date. What's your move?",
      example: "Suddenly, the bill arrives during your date.",
      options: [
        { text: "Pay for everything (but do the math in my head).", emoji: "💸" },
        { text: "Suggest splitting the bill (awkward).", emoji: "🤝" },
        { text: "Pretend to look for my wallet.", emoji: "👜" },
        { text: "Wait for them to pay.", emoji: "👀" },
      ],
    },
  ],
  [ // 13~18번
    {
      section: "Dating Meme Situation",
      question: "They say 'I'm tired today' and cancel. What do you do?",
      example: "They say they're tired and postpone the date.",
      options: [
        { text: "Drive them home (nice guy mode).", emoji: "🚗" },
        { text: "Try to make the date happen anyway.", emoji: "💪" },
        { text: "Go home and play games.", emoji: "🎮" },
        { text: "Show I'm a little sad.", emoji: "🥲" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "First meeting, they're super quiet. What do you do?",
      example: "First meeting, they barely talk at all.",
      options: [
        { text: "Try to break the ice, but make it even more awkward.", emoji: "😬" },
        { text: "Get quiet too (awkward stare-off).", emoji: "😶" },
        { text: "Try to lighten the mood with a meme story.", emoji: "😂" },
        { text: "Just hope it ends soon.", emoji: "😑" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "They post about you on social media. What's your move?",
      example: "They posted about you on social media.",
      options: [
        { text: "Like the post (act cool).", emoji: "👍" },
        { text: "Leave a funny comment.", emoji: "💬" },
        { text: "Brag to my friends.", emoji: "📢" },
        { text: "Feel a bit pressured, but don't show it.", emoji: "😅" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "It suddenly starts raining during your date. What do you do?",
      example: "Suddenly, it starts pouring rain during your date.",
      options: [
        { text: "Be romantic and share my umbrella (cosplay).", emoji: "☔" },
        { text: "We both run for it (reality).", emoji: "🏃‍♂️" },
        { text: "Take a selfie in the rain.", emoji: "📸" },
        { text: "Run to the nearest cafe.", emoji: "🏃" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "They ask, 'What are we?' How do you answer?",
      example: "They suddenly ask about your relationship status.",
      options: [
        { text: "Go for a direct confession (but cringe inside).", emoji: "💘" },
        { text: "Dodge with a joke (escape reality).", emoji: "😅" },
        { text: "Avoid answering (awkward).", emoji: "👀" },
        { text: "Reply with a meme (half serious, half joke).", emoji: "🤣" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You struggle to express your feelings in a relationship. What do you do?",
      example: "You're in a relationship but can't express your feelings well.",
      options: [
        { text: "Try my best (but it's awkward).", emoji: "💪" },
        { text: "Avoid it (act cool).", emoji: "😎" },
        { text: "Tell my friends about it in the group chat.", emoji: "👬" },
        { text: "Just hold it in (cringe at 3am).", emoji: "🛌" },
      ],
    },
  ],
];

const SECTION_LABELS = ["Dating", "Personality", "Communication"];

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

  const [isSliding, setIsSliding] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const goNext = () => {
    if (partIdx < 2) {
      router.push(`/relatableguy/test/${partIdx + 2}`);
      if (typeof window !== "undefined") {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }
    } else {
      router.push("/relatableguy/result"); // 마지막 파트에서 결과 페이지로 이동(필요시)
    }
  };

  const handleNext = () => {
    if (isSliding || isBlinking) return;
    
    if (partIdx === 2 && currentQuestions.every((_, idx) => answers[offset + idx] !== null)) {
      setIsBlinking(true);
      setTimeout(() => {
        // localStorage에서 최종 답변을 가져와 결과 계산
        const finalAnswers = JSON.parse(localStorage.getItem("test-answers") || "[]");
        const result = getResultFromAnswers(finalAnswers);
        
        if (result) {
          // 결과 정보를 URL 쿼리 파라미터로 포함시킴
          router.push(`/relatableguy/result?type=${encodeURIComponent(result.type)}&percent=${encodeURIComponent(result.percent)}`);
        } else {
          // 결과가 유효하지 않을 경우 기본 결과 페이지로 이동
          router.push("/relatableguy/result");
        }
        setIsBlinking(false);
      }, 220);
    } else {
      setIsSliding(true);
      setTimeout(() => {
        goNext();
        setIsSliding(false);
      }, 600);
    }
  };

  const totalQuestions = PARTS.flat().length;
  const answeredCount = answers.filter((a: number | null) => a !== null).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Why Are You Still Single, Bro? 😂 Meme Dating Test for Guys - Step ${partParam}",
          "description": "Your dating meme type has been revealed! Discover if you're a Comedian 🤣, a Rusher 🚀, or a Ghost 👻 — and share the laughs with friends",
          "url": "https://naviahub.dev/relatableguy/",
          "image": "/undraw_love_qypu_1200x630.png",
          "inLanguage": "en",
          "audience": {
            "@type": "Audience",
            "audienceType": "Meme Dating Test for Guys"
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
        }
      ` }} />
    
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
      {/* 질문 리스트 */}
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
    </div>
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
    </>
  );
} 