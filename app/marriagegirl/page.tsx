import Image from "next/image";
import { gtag } from "../util/ga";
import StartTestButton from "./StartTestButton";


export default function Page() {
  return (
    <>
    
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Marriage Meme Test for Girls",
        "description": "Discover your bridal meme type with a 2-minute fun test.",
        "url": "https://naviahub.dev/marriagegirl/",
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

    <div className="min-h-screen flex flex-col justify-center items-center bg-[#18171a] px-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg mx-auto">
        <div className="mb-6">
          <Image
            src="undraw_wedding_qt3q.svg"
            alt="Funny wedding meme"
            width={220}
            height={160}
            priority
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff5da2] text-center mb-6 leading-tight drop-shadow">
        Marriage? Cute idea. But have you seen my grocery bills? 😂
          <span className="block text-base text-[#f9a8d4] font-semibold mt-2">(For Pinterest scrollers, meme lovers, and not-so-sure brides 💍)</span>
          <span className="block text-base text-[#f9a8d4] font-semibold mt-2">(For Girls Only)</span>
        </h1>
        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">💸</span>
            <span className="text-white text-base sm:text-lg">
            Googled "wedding cost" once. Still recovering. 
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">👀</span>
            <span className="text-white text-base sm:text-lg">
            Everyone’s engaged. You’re meal prepping and rewatching Bridgerton.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">📱</span>
            <span className="text-white text-base sm:text-lg">
            You heart their wedding pics... then reopen Tinder.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">💍</span>
            <span className="text-white text-base sm:text-lg">
            Matching outfits? Joint taxes? Let's just take a test first. 😅.
            </span>
          </li>
        </ul>
        <span className="text-white text-base sm:text-lg block text-center mb-4">
        Not anti-marriage — just meme-curious? Let’s vibe check that energy. 👑
        </span>
        <StartTestButton />

        <div className="mt-4 flex flex-col items-center">
          <span className="text-base text-gray-400 mb-1">Are you a boy?</span>
          <a
            href="/marriageguy"
            className="text-blue-300 underline hover:text-blue-400 transition-colors text-sm"
          >
            Take the boy test here
          </a>
        </div>
      </main>
      <footer className="w-full text-center text-xs text-[#888] mt-12 mb-4 select-none">
        © 2025 Meme Marriage Test | All results are just for fun!
      </footer>
    </div>
    </>
  );
}
