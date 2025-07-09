"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { gtag } from "../util/ga";

export default function StartTestButton() {
  const [isStarting, setIsStarting] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    gtag('start_test', {
      category: 'marriagegirl',
      label: 'Start Marriage Meme Test Button',
    });
    setIsStarting(true);
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 180); // Flash 0.18초
    setTimeout(() => {
      router.push("/marriagegirl/test/1");
    }, 700); // Scale 애니메이션과 맞춤
  };

  return (
    <div className="relative w-full flex justify-center">
      <AnimatePresence>
        <motion.div
          key={isStarting ? "zoomout" : "main"}
          initial={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          animate={
            isStarting
              ? { scale: 1.22, opacity: 0, filter: "blur(12px)" }
              : { scale: 1, opacity: 1, filter: "blur(0px)" }
          }
          transition={{ duration: 0.6, ease: [0.4, 0.8, 0.2, 1] }}
          className="flex justify-center w-full"
        >
          <button
            onClick={handleStart}
            className="mt-2 px-8 py-3 rounded-full bg-[#ff5da2] text-white font-semibold text-lg shadow-md hover:bg-[#ff7db2] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff5da2] focus:ring-offset-2"
            disabled={isStarting}
          >
            Let's Go!
          </button>
        </motion.div>
      </AnimatePresence>
      {/* Flash White Overlay */}
      {isFlashing && (
        <div className="fixed inset-0 z-50 bg-white opacity-80 pointer-events-none animate-flash" />
      )}
      <style jsx global>{`
        @keyframes flash {
          0% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        .animate-flash {
          animation: flash 0.18s linear forwards;
        }
      `}</style>
    </div>
  );
} 