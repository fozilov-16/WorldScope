"use client"

import React from "react"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"

const Chart = () => {
  const t = useTranslations("Chart")
  const locale = useLocale()
  const isRu = locale === "ru"

  return (
    <div className="mt-16 max-w-[1200px] mx-auto px-4 font-mont">

      <h1 className="text-[22px] sm:text-[40px] font-semibold leading-[110%] text-center">
        {t("text")}
      </h1>

      <div className="relative w-full max-w-[600px] mx-auto mt-12 aspect-square">

        <Image
          src="/chart.svg"
          alt="chart"
          fill
          className="object-contain"
        />

        <div className="absolute inset-0 left-[-6%] top-[6%] flex items-center justify-center">
          <h1 className="text-[12px] font-semibold sm:text-[22px]">WorldScoupe</h1>
        </div>

        <div className="absolute bottom-[23%] left-[-6%] sm:left-[-12%] text-center leading-[160%]">
          <p className="text-[12px] sm:text-[24px]">{t("asia")}</p>
          <span className="text-[12px] sm:text-[15px]">59.4%</span>
        </div>

        <div className="absolute top-[7.5%] right-4/6 -translate-x-1/2 text-center leading-[160%]">
          <p className="text-[12px] font-medium sm:text-[24px]">{t("africa")}</p>
          <span className="text-[12px] sm:text-[16px]">18.2%</span>
        </div>

        <div className="absolute bottom-[6%] right-[4%] sm:right-[2%] text-center leading-[160%]">
          <p className="text-[12px] sm:text-[24px]">{t("europe")}</p>
          <span className="text-[12px] sm:text-[16px]">9.1%</span>
        </div>

        <div
          className={`
            absolute top-[32%] text-center leading-[160%]
            ${isRu ? "right-[-18%] sm:right-[-32%]" : "right-[-10%] sm:right-[-24%]"}
          `}
        >
          <p className="text-[12px] font-medium sm:text-[24px]">{t("north")}</p>
          <span className="text-[12px] sm:text-[16px]">7.6%</span>
        </div>
        
        <div
          className={`
            absolute bottom-[26%] text-center leading-[160%]
            ${isRu ? "right-[-12%] sm:right-[-30%]" : "right-[-8%] sm:right-[-24%]"}
          `}
        >
          <p className="text-[12px] sm:text-[24px]">{t("south")}</p>
          <span className="text-[12px] sm:text-[16px]">5.7%</span>
        </div>

      </div>
    </div>
  )
}

export default Chart