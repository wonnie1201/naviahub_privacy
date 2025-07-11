import Image from "next/image";
import { gtag } from "@/app/util/ga";
import StartTestButton from "./StartTestButton";



export default function Page() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Which Meme Girl Are You? 💖 Take the Ultimate Relatable Dating Test!",
          "description": "For girls only! Are you the Overthinker 🙈, the Group Chat Queen 💬, or the Outfit Planner 👗? Discover your dating meme type in 2 minutes!",
          "url": "https://naviahub.dev/relatablegirl/",
          "image": "/undraw_love_qypu_1200x630.png",
          "inLanguage": "en",
          "audience": {
            "@type": "Audience",
            "audienceType": "Meme Dating Test for Girls"
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
          "datePublished": "2025-07-04",
          "dateModified": "2025-07-11"
        }
      ` }} />
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#18171a] px-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg mx-auto">
        <div className="mb-6">
          <Image
            src="/relatableguy/undraw_love_qypu.svg"
            alt="Intro illustration"
            width={220}
            height={160}
            priority
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff5da2] text-center mb-6 leading-tight drop-shadow">
        If you relate to any of these, this test is basically made for you!<br />
          (Outfits, DMs, Group Chat & More)
          <span className="block text-base text-[#FFC0CB] font-semibold mt-2">(For Girls Only)</span>
        </h1>
        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">💬</span>
            <span className="text-white text-base sm:text-lg">Ever sent your friends a screenshot of his 'hey' just to overanalyze every word?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">👗</span>
            <span className="text-white text-base sm:text-lg">Planned your entire outfit for a date, then changed it five times before leaving?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">📱</span>
            <span className="text-white text-base sm:text-lg">Watched his Instagram story, then immediately texted your bestie: 'Did you see what he posted?!.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">🤣</span>
            <span className="text-white text-base sm:text-lg">Pretended to be chill when he took hours to reply, but actually checked your phone every five minutes?! 😎</span>
          </li>
        </ul>
        <StartTestButton />
        <div className="mt-4 flex flex-col items-center">
          <span className="text-base text-gray-400 mb-1">Are you a boy?</span>
          <a
            href="/relatableguy"
            className="text-blue-300 underline hover:text-blue-400 transition-colors text-sm"
          >
            Take the boy test here
          </a>
        </div>
      </main>
      <footer className="w-full text-center text-xs text-[#888] mt-12 mb-4 select-none">
        © 2025 Meme Dating Test | All results are just for fun!
      </footer>
    </div>
    </>
  );
}
