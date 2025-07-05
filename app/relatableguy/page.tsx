import Image from "next/image";

export const metadata = {
  title: "Which Meme Guy Are You? 😂 Find Out in the 100% Relatable Dating Test!",
  description: "For guys only! Are you the Ghost 👻, the Simp 🥲, or the Meme Lord 🤣? Discover your dating meme type in 2 minutes!",
  openGraph: {
    title: "Which Meme Guy Are You? 😂 Find Out in the 100% Relatable Dating Test!",
    description: "For guys only! Are you the Ghost 👻, the Simp 🥲, or the Meme Lord 🤣? Discover your dating meme type in 2 minutes!",
    url: "https://relatableguy.naviahub.dev/",
    images: [
      {
        url: "/heart_thumbnail_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Meme Dating Test",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#18171a] px-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg mx-auto">
        <div className="mb-6">
          <Image
            src="/relatableguy/undraw_art_odou.svg"
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
        <a
          href="/relatableguy/test/1"
          className="mt-2 px-8 py-3 rounded-full bg-[#ff5da2] text-white font-semibold text-lg shadow-md hover:bg-[#ff7db2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff5da2] focus:ring-offset-2"
        >
          Start Meme Test
        </a>
      </main>
      <footer className="w-full text-center text-xs text-[#888] mt-12 mb-4 select-none">
        © 2025 Meme Dating Test | All results are just for fun!
      </footer>
    </div>
  );
}
