"use client";
import { gtag } from "../util/ga";

export default function StartTestButton() {
  return (
    <a
      href="/relatablegirl/test/1"
      className="mt-2 px-8 py-3 rounded-full bg-[#ff5da2] text-white font-semibold text-lg shadow-md hover:bg-[#ff7db2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff5da2] focus:ring-offset-2"
      onClick={() => {
        gtag('start_test', {
          category: 'relatablegirl',
          label: 'Start Meme Test Button',
        });
      }}
    >
      Start Meme Test
    </a>
  );
} 