"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

const PINK = "#ffb6d5"; // 연한 핑크
const PINK_HOVER = "#ffc6e0";
const PINK_BORDER = "#ffb6d5";

const PARTS = [
  [ // 1~6번 (Dating Situations)
    {
      section: "Dating Meme Situation",
      question: "He replies after 3 hours. What do you do?",
      example: "You text him, and he replies 3 hours later.",
      options: [
        { text: "Wait another 3 hours to reply. Gotta play the game.", emoji: "⏰" },
        { text: "Screenshot and send to the group chat: 'What does this mean?!'", emoji: "📸" },
        { text: "Act chill, but check my phone every 5 minutes.", emoji: "😎" },
        { text: "Just go to sleep. If he wants me, he'll text again.", emoji: "😴" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You see him liking another girl's post. Your move?",
      example: "He likes another girl's Instagram post.",
      options: [
        { text: "Pretend not to care, but stalk her profile.", emoji: "🕵️‍♀️" },
        { text: "Send it to my bestie: 'Who is she?!'", emoji: "🙈" },
        { text: "Like his post right after, just to remind him.", emoji: "💅" },
        { text: "Mute him for a day. That'll show him.", emoji: "🙄" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He cancels your date last minute. What now?",
      example: "He texts you an hour before the date to cancel.",
      options: [
        { text: "Say it's fine, but rant to my friends.", emoji: "📱" },
        { text: "Instantly make other plans. My time is precious.", emoji: "👑" },
        { text: "Act unbothered, but feel a little sad.", emoji: "🥲" },
        { text: "Order takeout and binge Netflix.", emoji: "🍕📺" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Awkward silence on a date. What do you do?",
      example: "Suddenly, the conversation stops and there's an awkward silence on your date.",
      options: [
        { text: "Try to break the ice, but make it even more awkward.", emoji: "😬" },
        { text: "Check my phone and hope he says something.", emoji: "📱" },
        { text: "Ask a random question about his childhood.", emoji: "🍼" },
        { text: "Just smile and sip my drink.", emoji: "🥤" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He posts a cryptic story. Your reaction?",
      example: "He uploads a mysterious Instagram story.",
      options: [
        { text: "Analyze it with my bestie for 30 minutes.", emoji: "🕵️‍♀️" },
        { text: "Reply with a meme.", emoji: "🤪" },
        { text: "Ignore it, but secretly wonder if it's about me.", emoji: "🤔" },
        { text: "Post my own story, but make it even more mysterious.", emoji: "😏" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He's late for your date. What do you do?",
      example: "He arrives 15 minutes late to your date.",
      options: [
        { text: "Text 'no worries!' but actually annoyed.", emoji: "😇" },
        { text: "Order a coffee and wait.", emoji: "☕️" },
        { text: "Call my friend to complain.", emoji: "📞" },
        { text: "Show up late next time as payback.", emoji: "😏" },
      ],
    },
  ],
  [ // 7~12번 (Personality & Communication)
    {
      section: "Dating Meme Situation",
      question: "You catch feelings but don't want to admit it.",
      example: "You realize you like him, but you're in denial.",
      options: [
        { text: "Tell my friends but deny it to myself.", emoji: "🙅‍♀️" },
        { text: "Drop hints and hope he notices.", emoji: "😉" },
        { text: "Act extra chill around him.", emoji: "😎" },
        { text: "Write about it in my notes app.", emoji: "📱" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He leaves you on read. What now?",
      example: "You see he read your message but didn't reply.",
      options: [
        { text: "Double text after a few hours.", emoji: "📲" },
        { text: "Pretend I didn't notice.", emoji: "😶" },
        { text: "Send a meme to break the ice.", emoji: "🤡" },
        { text: "Unfollow him for a day.", emoji: "🙃" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "Your friend confesses she likes the same guy.",
      example: "Your close friend says she likes your crush.",
      options: [
        { text: "Pretend I'm cool, but feel awkward.", emoji: "😬" },
        { text: "Suggest we both move on.", emoji: "🏃‍♀️🏃‍♀️" },
        { text: "Let her have him, friendship first!", emoji: "👭" },
        { text: "Secretly compete, may the best girl win.", emoji: "🏆" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He asks 'What are we?'",
      example: "He suddenly asks about your relationship status.",
      options: [
        { text: "Panic and change the subject.", emoji: "😳" },
        { text: "Give a vague answer.", emoji: "🤔" },
        { text: "Say 'Let's just see where it goes.'", emoji: "🌊" },
        { text: "Confess my feelings (and cringe later).", emoji: "💖" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You want to post about him but not make it obvious.",
      example: "You want to post a photo with him, but don't want people to know.",
      options: [
        { text: "Post a group photo and tag everyone.", emoji: "📸" },
        { text: "Use a cryptic caption.", emoji: "📝" },
        { text: "Just post my coffee, but he's in the background.", emoji: "☕️" },
        { text: "Don't post at all, too risky.", emoji: "🙅‍♀️" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He gives you a compliment. Your reaction?",
      example: "He says you look great today.",
      options: [
        { text: "Blush and say thanks.", emoji: "😊" },
        { text: "Make a self-deprecating joke.", emoji: "��" },
        { text: "Compliment him back.", emoji: "😏" },
        { text: "Pretend I didn't hear it.", emoji: "🙉" },
      ],
    },
  ],
  [ // 13~18번 (Group Chat, Overthinking, Real-life)
    {
      section: "Dating Meme Situation",
      question: "You see him with another girl in public.",
      example: "You spot him talking to another girl at a cafe.",
      options: [
        { text: "Pretend not to notice, but text my friends immediately.", emoji: "📱" },
        { text: "Go say hi and act casual.", emoji: "😇" },
        { text: "Overthink for the rest of the day.", emoji: "🤯" },
        { text: "Assume it's his cousin (copium).", emoji: "😅" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You're not sure if he's flirting or just being nice.",
      example: "He sends you a funny meme and compliments your outfit.",
      options: [
        { text: "Ask my friends for their opinion.", emoji: "🕵️‍♀️" },
        { text: "Analyze every message.", emoji: "🧐" },
        { text: "Just go with the flow.", emoji: "🌊" },
        { text: "Flirt back and see what happens.", emoji: "😉" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He forgets your birthday. What do you do?",
      example: "He doesn't text you on your birthday.",
      options: [
        { text: "Pretend it's no big deal, but feel hurt.", emoji: "🥲" },
        { text: "Drop hints all day.", emoji: "🎂" },
        { text: "Tell him directly.", emoji: "🗣️" },
        { text: "Ignore him for a week.", emoji: "🙄" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You want to say 'I miss you' but feel shy.",
      example: "You want to text him 'I miss you' but hesitate.",
      options: [
        { text: "Send a meme instead.", emoji: "🤪" },
        { text: "Just like his old photos.", emoji: "❤️" },
        { text: "Wait for him to say it first.", emoji: "⏳" },
        { text: "Type it out, then delete.", emoji: "🫣" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "You're getting ready for a date.",
      example: "You have a date tonight and are picking your outfit.",
      options: [
        { text: "Try on five different outfits.", emoji: "👗" },
        { text: "Ask my friends for advice.", emoji: "📸" },
        { text: "Arrive fashionably late.", emoji: "⏰" },
        { text: "Get nervous and almost cancel.", emoji: "😳" },
      ],
    },
    {
      section: "Dating Meme Situation",
      question: "He finally asks you out. Your response?",
      example: "He texts you to go out for dinner together.",
      options: [
        { text: "Say yes, but play it cool.", emoji: "😎" },
        { text: "Scream internally, but act chill.", emoji: "😱" },
        { text: "Tell my friends immediately.", emoji: "📱" },
        { text: "Make him wait a bit before replying.", emoji: "⏳" },
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
      router.push(`/relatablegirl/test/${partIdx + 2}`);
      if (typeof window !== "undefined") {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      }
    } else {
      router.push("/relatablegirl/result"); // 마지막 파트에서 결과 페이지로 이동(필요시)
    }
  };

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
      }, 600);
    }
  };

  const totalQuestions = PARTS.flat().length;
  const answeredCount = answers.filter((a: number | null) => a !== null).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <>
    <Head>
      <link rel="canonical" href={`https://naviahub.dev/relatablegirl/test/${partParam}`} />
      <meta name="description" content="You're halfway through the 100% Relatable Meme Dating Test for Girls! Will you end up as the Overthinker 🤯, the Group Chat Queen 💅, or the Ghost 👻? Keep going!" />
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
      {/* Blink 오버레이 */}
      {isBlinking && (
        <div className="fixed inset-0 z-50 bg-black opacity-90 pointer-events-none animate-blink" />
      )}
    </div>
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