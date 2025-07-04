import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4 text-gray-900">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="mb-4">If you have any questions or issues regarding our service, please contact us at the email below.</p>
        <p className="mb-4">Email: <a href="mailto:admin@naviahub.dev" className="underline text-blue-600">admin@naviahub.dev</a></p>
        <p className="text-sm text-gray-500">Response time may vary depending on the nature of your inquiry.</p>
        <p className="mt-8 text-sm text-gray-500">This contact applies to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 