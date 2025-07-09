import React from "react";

export const metadata = {
  title: "Privacy Policy - NAVIA",
  description: "Read NAVIA's privacy policy to learn how we protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto bg-[#18181b] rounded-2xl shadow-xl p-10 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-pink-300">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy explains how we collect, use, and protect your personal information when you use our service (the "Service"). We are committed to safeguarding your privacy and complying with all applicable laws.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Required: Service usage data, cookies, IP address</li>
          <li>Optional: Email (when you contact us)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">2. Purpose of Collection</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and operate the Service</li>
          <li>To respond to user inquiries</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">3. Retention and Deletion</h2>
        <p className="mb-4">We retain personal information only as long as necessary for the purposes stated above or as required by law. Information is deleted upon request or when no longer needed.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">4. Third-Party Sharing</h2>
        <p className="mb-4">We do not share your personal information with third parties except as required by law.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Request access, correction, or deletion of your data</li>
          <li>Withdraw consent or request restriction of processing</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-pink-300">6. Contact</h2>
        <p>For any questions, please contact: <span className="text-white">admin@naviahub.dev</span></p>
        <p className="mt-8 text-sm text-gray-400">This policy applies to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 