import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://naviahub.dev'),
  title: "Which Meme Girl Are You? 💖 Take the Ultimate Relatable Dating Test!",
  description: "For girls only! Are you the Overthinker 🙈, the Group Chat Queen 💬, or the Outfit Planner 👗? Discover your dating meme type in 2 minutes!",

  openGraph: {
    title: "Which Meme Girl Are You? 💖 Take the Ultimate Relatable Dating Test!",
    description:
      "For girls only! Are you the Overthinker 🙈, the Group Chat Queen 💬, or the Outfit Planner 👗? Discover your dating meme type in 2 minutes!",
    url: "https://naviahub.dev/relatablegirl/",
    images: [
      {
        url: "/undraw_love_qypu_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Meme Dating Test for Girls",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://naviahub.dev/relatablegirl/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RelatableguyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* 메타 태그는 head.js 또는 metadata 객체를 통해 관리됩니다 */}
        {children}
        <footer className="w-full py-8 px-4 bg-[#18171a]">
          <div className="text-center text-gray-400 text-sm">
            We focus on relationship content.<br />
            All legal notices are managed by <a
              href="https://www.naviahub.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 underline hover:text-pink-400"
            >NaviaHub</a>.
          </div>
        </footer>
    </div>
  );
}
