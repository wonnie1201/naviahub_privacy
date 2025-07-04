import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4 text-gray-900">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">These Terms of Service ("Terms") govern your use of this website and its services (the "Service"). By using the Service, you agree to these Terms.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Service Description</h2>
        <p className="mb-4">We provide meme tests, results, and other features. The Service may change or be discontinued at any time without notice.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. User Obligations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Do not infringe on the rights of others</li>
          <li>Do not disrupt the normal operation of the Service</li>
          <li>Comply with all applicable laws and these Terms</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Disclaimer</h2>
        <p className="mb-4">All results and information provided by the Service are for entertainment and reference only, and have no legal effect.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Changes to Terms</h2>
        <p className="mb-4">We may update these Terms at any time. Changes will be posted on this page.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact</h2>
        <p>For inquiries, please contact: <a href="mailto:admin@naviahub.dev" className="underline text-blue-600">admin@naviahub.dev</a></p>
        <p className="mt-8 text-sm text-gray-500">These Terms apply to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 