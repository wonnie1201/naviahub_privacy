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
  title: "Marriage Meme Test for Girls 💅 | Find Your Bridal Vibe",
  description: "Not anti-marriage — just meme-curious? Take the test made for girls who’ve planned weddings on Pinterest… for fun. 😂💍",

  openGraph: {
    title: "Marriage? Cute idea. But have you seen my grocery bills?",
    description:
      "Take the test that every 'just browsing Pinterest weddings for fun' girl needs.",
    url: "https://naviahub.dev/marriagegirl/",
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
    canonical: "https://naviahub.dev/marriagegirl/",
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
