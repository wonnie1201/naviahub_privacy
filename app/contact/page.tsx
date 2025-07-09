import React from "react";

export const metadata = {
  title: "Contact Us - NAVIA",
  description: "If you have any questions about NAVIA, feel free to contact us anytime.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto bg-[#18181b] rounded-2xl shadow-xl p-10 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-pink-300">Contact</h1>
        <p className="mb-4">If you have any questions or issues regarding our service, please contact us at the email below.</p>
        <p className="mb-4">Email: <span className="text-white">admin@naviahub.dev</span></p>
        <p className="text-sm text-gray-400">Response time may vary depending on the nature of your inquiry.</p>
        <p className="mt-8 text-sm text-gray-400">This contact applies to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 