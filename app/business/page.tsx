import React from "react";

export default function BusinessPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Business Information</h1>
      <ul className="mb-4">
        <li className="mb-2"><span className="font-semibold">Business Name:</span> Navia</li>
        <li className="mb-2"><span className="font-semibold">Representative:</span> Jaewon Yoo</li>
        <li className="mb-2"><span className="font-semibold">Business Registration Number:</span> 553-21-02088</li>
        <li className="mb-2"><span className="font-semibold">Address:</span> backseokdong-1005, 1, 340-38, Hosu-ro, Ilsandong-gu, Goyang-si, Gyeonggi-do, 10449, Republic of Korea</li>
        <li className="mb-2"><span className="font-semibold">Contact Email:</span> <a href="mailto:admin@naviahub.dev" className="underline text-blue-600">admin@naviahub.dev</a></li>
      </ul>
      <p className="text-sm text-gray-500">This business information applies to naviahub.dev and all related services.</p>
    </div>
  );
} 