"use client";
import React, { useState } from "react";

type Feature = {
  title: string;
  desc: string;
  img: string;
  quote: string;
  stat: string;
};

interface FeatureSliderProps {
  features: Feature[];
}

export default function FeatureSlider({ features }: FeatureSliderProps) {
  const [featureIdx, setFeatureIdx] = useState(0);
  const nextFeature = () => setFeatureIdx((featureIdx + 1) % features.length);
  const prevFeature = () => setFeatureIdx((featureIdx - 1 + features.length) % features.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="w-full bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-3xl shadow-2xl p-12 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full"></div>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <img 
                src={features[featureIdx].img} 
                alt={features[featureIdx].title} 
                className="w-36 h-36 object-contain relative z-10" 
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">{features[featureIdx].title}</h3>
            <p className="text-gray-300 leading-relaxed text-lg font-light mb-6">{features[featureIdx].desc}</p>
            <div className="p-4 border-l-2 border-pink-500/30 bg-pink-500/5 rounded-r-lg italic text-sm text-gray-300 mb-4">
              {features[featureIdx].quote}
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-300 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-gray-300">{features[featureIdx].stat}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 mt-12">
        <button 
          onClick={prevFeature} 
          className="w-12 h-12 rounded-full bg-[#111] border border-gray-800 text-gray-400 flex items-center justify-center text-xl hover:bg-[#222] hover:text-white transition-all"
          aria-label="Previous feature"
        >
          &#8592;
        </button>
        <div className="flex gap-3">
          {features.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setFeatureIdx(idx)}
              className={`h-2 rounded-full transition-all ${idx === featureIdx ? 'bg-pink-300 w-10' : 'bg-gray-700 w-2'}`}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextFeature} 
          className="w-12 h-12 rounded-full bg-[#111] border border-gray-800 text-gray-400 flex items-center justify-center text-xl hover:bg-[#222] hover:text-white transition-all"
          aria-label="Next feature"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
} 