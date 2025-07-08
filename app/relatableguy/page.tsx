import Image from "next/image";
import { gtag } from "../util/ga";
import StartTestButton from "./StartTestButton";

export const metadata = {
  title: "Which Meme Guy Are You? 😂 Find Out in the 100% Relatable Dating Test!",
  description: "For guys only! Are you the Ghost 👻, the Simp 🥲, or the Meme Lord 🤣? Discover your dating meme type in 2 minutes!",
  openGraph: {
    title: "Which Meme Guy Are You? 😂 Find Out in the 100% Relatable Dating Test!",
    description: "For guys only! Are you the Ghost 👻, the Simp 🥲, or the Meme Lord 🤣? Discover your dating meme type in 2 minutes!",
    url: "https://naviahub.dev/relatableguy/",
    images: [
      {
        url: "/1200_680.png",
        width: 1200,
        height: 680,
        alt: "Meme Dating Test for Guys",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://naviahub.dev/relatableguy",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#18171a] px-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg mx-auto">
        <div className="mb-6">
          <Image
            src="/relatableguy/undraw_loving-it_hspq.svg"
            alt="Intro illustration"
            width={220}
            height={160}
            priority
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff5da2] text-center mb-6 leading-tight drop-shadow">
          100% Relatable Guy Meme Dating Test<br />
          (Cringe, Flex, Group Chat & More)
          <span className="block text-base text-[#5daaff] font-semibold mt-2">(For Guys Only)</span>
        </h1>
        <ul className="mb-8 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">😎</span>
            <span className="text-white text-base sm:text-lg">Ever acted cool, then cringed in bed at 3am?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">📸</span>
            <span className="text-white text-base sm:text-lg">Ever dropped a screenshot in the group chat?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">🎮</span>
            <span className="text-white text-base sm:text-lg">No reply? Time to escape into gaming.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#ff5da2] text-lg font-bold">🤣</span>
            <span className="text-white text-base sm:text-lg">If you read this and think "that's literally me"—start now! 😂</span>
          </li>
        </ul>
        <StartTestButton />
        <div className="mt-4 flex flex-col items-center">
          <span className="text-base text-gray-400 mb-1">Are you a girl?</span>
          <a
            href="/relatablegirl"
            className="text-pink-300 underline hover:text-pink-400 transition-colors text-sm"
          >
            Take the girl test here
          </a>
        </div>
      </main>
      <footer className="w-full text-center text-xs text-[#888] mt-12 mb-4 select-none">
        © 2025 Meme Dating Test | All results are just for fun!
      </footer>
    </div>
  );
}
