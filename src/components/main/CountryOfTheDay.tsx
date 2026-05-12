"use client"

import React from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"

const CountryOfTheDay = () => {
  const t = useTranslations("CountryDay")

  return (
    <section className="flex flex-col items-center px-4 pb-10 sm:pb-14">

      {/* TITLE */}
      <h1 className="text-[28px] sm:text-[48px] font-mont font-semibold text-center mb-8">
        {t("text")}
      </h1>

      {/* CARD */}
      <div className="relative w-full sm:w-[1200px] min-h-[440px] sm:min-h-[531px] sm:rounded-[50px] rounded-[15px] overflow-hidden">

        {/* IMAGE */}
        <Image
          src="/Japan.jpg"
          alt="Japan"
          fill
          priority
          className="object-cover"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between min-h-[440px] sm:min-h-[531px] p-6 sm:p-12 text-white">

          {/* TOP */}
          <div>

            <h2 className="text-[32px] sm:text-[96px] font-nico leading-[100%]">
              {t("japan")
                .split(" ")
                .map((word, index) => {

                  const isRussian = /[а-яА-ЯЁё]/.test(word)

                  return (
                    <span
                      key={index}
                      className={
                        isRussian
                          ? "font-mont text-[32px] sm:text-[88px] font-semibold"
                          : "font-nico"
                      }
                    >
                      {word}{" "}
                    </span>
                  )
                })}
            </h2>

            {/* INFO */}
            <div className="mt-4 flex flex-col gap-2 text-[14px] sm:text-[20px] font-mont">

              <div className="flex gap-2">
                <span className="opacity-70">{t("capital")}:</span>
                <span>Tokyo</span>
              </div>

              <div className="flex gap-2">
                <span className="opacity-70">{t("population")}:</span>
                <span>125.7M</span>
              </div>

              <div className="flex gap-2">
                <span className="opacity-70">{t("currency")}:</span>
                <span>Japanese Yen</span>
              </div>

              <div className="flex gap-2">
                <span className="opacity-70">{t("fact")}:</span>
                <span>Has 6,852 islands</span>
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-6">

            <p className="max-w-[650px] text-[14px] sm:text-[16px] leading-[150%] font-mont">
              {t("about")}
            </p>

            <button className="px-8 h-[50px] sm:h-[55px] rounded-full bg-white text-black font-mont font-semibold hover:scale-105 transition-all w-full sm:w-auto">
              {t("next")}
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CountryOfTheDay