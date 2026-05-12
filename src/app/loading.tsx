"use client"

import React from "react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0b0c2b] to-[#1c1f4a] px-4">
      
      {/* Мерцающие звезды */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full opacity-50 animate-pulse`}
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Текст загрузки */}
      <p className="relative text-white text-[20px] sm:text-[40px] font-nico animate-pulse z-10">
        ...loading
      </p>

      {/* Анимация космической орбиты */}
      <div className="relative mt-8 w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-white/30 animate-spin-slow z-10">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2" />
      </div>

    </div>
  )
}