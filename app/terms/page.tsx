import React from "react";

export const metadata = {
  title: "Terms of Service - NAVIA",
  description: "Review NAVIA's terms of service before using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto bg-[#18181b] rounded-2xl shadow-xl p-10 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-pink-300">Terms of Service</h1>
        <p className="mb-4">These Terms of Service ("Terms") govern your use of this website and its services (the "Service"). By using the Service, you agree to these Terms.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">1. Service Description</h2>
        <p className="mb-4">We provide meme tests, results, and other features. The Service may change or be discontinued at any time without notice.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">2. User Obligations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Do not infringe on the rights of others</li>
          <li>Do not disrupt the normal operation of the Service</li>
          <li>Comply with all applicable laws and these Terms</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">3. Disclaimer</h2>
        <p className="mb-4">All results and information provided by the Service are for entertainment and reference only, and have no legal effect.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">4. Changes to Terms</h2>
        <p className="mb-4">We may update these Terms at any time. Changes will be posted on this page.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">5. Contact</h2>
        <p>For inquiries, please contact: <span className="text-white">admin@naviahub.dev</span></p>
        <p className="mt-8 text-sm text-gray-400">These Terms apply to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 