import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4 text-gray-900">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy explains how we collect, use, and protect your personal information when you use our service (the "Service"). We are committed to safeguarding your privacy and complying with all applicable laws.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Required: Service usage data, cookies, IP address</li>
          <li>Optional: Email (when you contact us)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Purpose of Collection</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and operate the Service</li>
          <li>To respond to user inquiries</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Retention and Deletion</h2>
        <p className="mb-4">We retain personal information only as long as necessary for the purposes stated above or as required by law. Information is deleted upon request or when no longer needed.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Sharing</h2>
        <p className="mb-4">We do not share your personal information with third parties except as required by law.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Request access, correction, or deletion of your data</li>
          <li>Withdraw consent or request restriction of processing</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact</h2>
        <p>For any questions, please contact: <a href="mailto:admin@naviahub.dev" className="underline text-blue-600">admin@naviahub.dev</a></p>
        <p className="mt-8 text-sm text-gray-500">This policy applies to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 