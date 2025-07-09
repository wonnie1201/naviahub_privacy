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
  title: "Marriage Meme Test for Guys 💅 | Find Your Bridal Vibe",
  description: "Discover your hilarious wedding alter ego — from Meme Priest to Escape Artist. The meme-based marriage test that doesn’t take 'I do' too seriously. 💀💍",

  openGraph: {
   title: "Marriage Meme Test for Guys 💀 | What’s Your Wedding Vibe?",
  description: "From Meme Priest to Escape Artist — discover your hilarious wedding alter ego in this brutally honest meme quiz for guys. 🚀💍",
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
    canonical: "https://naviahub.dev/marriageguy/",
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
