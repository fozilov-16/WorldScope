"use client"

import React, { useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"

import { useAppDispatch, useAppSelector } from "@/src/store/hooks"
import { getCountryOfDay, API, MEDIA } from "@/src/reducers/api"

const CountryOfTheDay = () => {
  const t = useTranslations("CountryDay")
  const locale = useLocale()

  const dispatch = useAppDispatch()

  const { countryOfDay, loading } = useAppSelector(
    (state) => state.todos
  )

  useEffect(() => {
    dispatch(getCountryOfDay(locale))
  }, [dispatch, locale])

  // ✅ API returns OBJECT not ARRAY
  const daily = countryOfDay

  // ✅ nested country object
  const country = daily?.country

  if (loading) {
    return (
      <section className="flex items-center justify-center py-20">
        <h1 className="text-white text-[22px] font-mont">
          Loading...
        </h1>
      </section>
    )
  }

  if (!daily || !country) return null

  return (
    <section className="flex flex-col items-center px-4 pb-10 sm:pb-14">

      {/* TITLE */}
      <h1 className="text-[28px] sm:text-[48px] font-mont font-semibold text-center mb-8">
        {t("text")}
      </h1>

      {/* CARD */}
      <div className="relative w-full sm:w-[1200px] min-h-[440px] sm:min-h-[531px] sm:rounded-[50px] rounded-[15px] overflow-hidden">

        {/* IMAGE */}
        <img
          src={
            daily.image
              ? `http://127.0.0.1:8000${daily.image}`
              : "/Japan.jpg"
          }
          alt={country.name || "Country"}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between min-h-[440px] sm:min-h-[531px] p-6 sm:p-12 text-white">

          {/* TOP */}
          <div>

            <h2 className="text-[32px] sm:text-[96px] font-nico leading-[100%]">
              {country.name
                ?.split(" ")
                .map((word: string, index: number) => {

                  const isRussian = /[а-яА-ЯЁё]/.test(word)

                  return (
                    <span
                      key={index}
                      className={
                        isRussian
                          ? "font-mont text-[32px] sm:text-[62px] font-semibold"
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
                <span className="opacity-70">
                  {t("capital")}:
                </span>

                <span>{country.capital}</span>
              </div>

              <div className="flex gap-2">
                <span className="opacity-70">
                  {t("population")}:
                </span>

                <span>
                  {country.population?.toLocaleString()}
                </span>
              </div>

              <div className="flex gap-2">
                <span className="opacity-70">
                  {t("continent")}:
                </span>

                <span>{country.continent_display}</span>
              </div>

              <div className="flex gap-2">
                <span className="opacity-70">
                  {t("area")}:
                </span>

                <span>
                  {country.area?.toLocaleString()} km²
                </span>
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-6">

            <p className="max-w-[650px] text-[14px] sm:text-[16px] leading-[150%] font-mont">
              {daily.fun_fact}
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