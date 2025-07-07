import Image from "next/image";
import { gtag } from "../util/ga";
import StartTestButton from "./StartTestButton";

export const metadata = {
  title: "Marriage: Big deal or just another meme? 😂 Take the Fun Marriage Vibe Test!",
  description: "Are you ready to say 'I do'? Or just 'I'll think about it'? Find out your marriage meme vibe in 2 minutes!",
  openGraph: {
    title: "Marriage: Big deal or just another meme? 😂 Take the Fun Marriage Vibe Test!",
    description: "Are you ready to say 'I do'? Or just 'I'll think about it'? Find out your marriage meme vibe in 2 minutes!",
    url: "https://naviahub.dev/marriageguy/",
    images: [
      {
        url: "/undraw_wedding_qt3q_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Meme Marriage Test",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://naviahub.dev/marriageguy",
  },
};

export default function Page() {
  return (
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
          Marriage: Big deal or just another meme?
          <span className="block text-base text-[#5daaff] font-semibold mt-2">(For everyone who's not taking it too seriously)</span>
          <span className="block text-base text-[#5daaff] font-semibold mt-2">(For Guys Only)</span>
        </h1>
        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">💸</span>
            <span className="text-white text-base sm:text-lg">
              Marriage sounds nice... until you Google "average wedding cost". 💀
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">👀</span>
            <span className="text-white text-base sm:text-lg">
              Everyone's getting married. You're just mastering solo meal prep.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">📱</span>
            <span className="text-white text-base sm:text-lg">
              You reply "LMAO" to wedding pics... and move on.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">💍</span>
            <span className="text-white text-base sm:text-lg">
              If the idea of matching outfits makes you sweat—this test is for you.
            </span>
          </li>
        </ul>
        <span className="text-white text-base sm:text-lg block text-center mb-4">
          If you're not anti-marriage, just meme-curious—tap that button. 😂
        </span>
        <StartTestButton />
       
      </main>
      <footer className="w-full text-center text-xs text-[#888] mt-12 mb-4 select-none">
        © 2025 Meme Marriage Test | All results are just for fun!
      </footer>
    </div>
  );
}
