"use client"

import React from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ArrowLeft, Heart, MapPin } from "lucide-react"

const PictureDay = () => {
  const t = useTranslations("PictureDay")

  return (
    <section className="relative flex flex-col items-center text-center px-4 pb-6 sm:pb-10">

      {/* TITLE */}
      <h1 className="text-[22px] sm:text-[48px] font-mont font-semibold leading-[110%] mb-8">
        {t("text")}
      </h1>

      {/* CARD */}
      <div className="relative w-full sm:w-[1200px] min-h-[400px] sm:min-h-[531px] rounded-[14px] sm:rounded-[50px] overflow-hidden">

        {/* IMAGE */}
        <Image
          src="/niagaraFalls.jpg"
          alt="Niagara Falls"
          fill
          priority
          className="object-cover"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between min-h-[400px] sm:min-h-[531px] p-6 sm:p-10 text-left text-white">

          {/* TOP */}
          <div>

            <div className="flex items-start justify-between gap-4">

              <h2 className="text-[32px] sm:text-[56px] font-nico leading-[100%]">
                {t("name")
                  .split(" ")
                  .map((word, index) => {

                    const isRussian = /[а-яА-ЯЁё]/.test(word)

                    return (
                      <span
                        key={index}
                        className={isRussian ? "font-mont text-[32px] sm:text-[56px] font-medium" : "font-nico"}
                      >
                        {word}{" "}
                      </span>
                    )
                  })}
              </h2>

              <button className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
                <Heart size={22} />
              </button>

            </div>

            <div className="flex items-center gap-2 mt-3 text-[16px] sm:text-[22px] font-mont">
              <MapPin size={20} />
              <span>{t("location")}</span>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

            <p className="max-w-[650px] text-[14px] sm:text-[16px] leading-[150%] font-mont mt-2">
              {t("desc")}
            </p>

            <div className="flex items-center gap-3">

              <button className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
                <ArrowLeft size={22} />
              </button>

              <button className="px-8 h-[45px] sm:h-[55px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all text-[16px] sm:text-[20px] font-mont">
                {t("explore")}
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default PictureDay