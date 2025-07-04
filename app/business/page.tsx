import React from "react";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto bg-[#18181b] rounded-2xl shadow-xl p-10 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-pink-300">Business Information</h1>
        <ul className="mb-4">
          <li className="mb-2"><span className="font-semibold text-pink-300">Business Name:</span> Navia</li>
          <li className="mb-2"><span className="font-semibold text-pink-300">Representative:</span> Jaewon Yoo</li>
          <li className="mb-2"><span className="font-semibold text-pink-300">Business Registration Number:</span> 553-21-02088</li>
          <li className="mb-2"><span className="font-semibold text-pink-300">Address:</span> backseokdong-1005, 1, 340-38, Hosu-ro, Ilsandong-gu, Goyang-si, Gyeonggi-do, 10449, Republic of Korea</li>
          <li className="mb-2"><span className="font-semibold text-pink-300">Contact Email:</span> <span className="text-white">admin@naviahub.dev</span></li>
        </ul>
        <p className="text-sm text-gray-400">This business information applies to naviahub.dev and all related services.</p>
      </div>
    </div>
  );
} 