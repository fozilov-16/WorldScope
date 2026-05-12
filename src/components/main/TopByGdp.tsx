"use client";
import React, { useEffect } from "react";
import { getCountriesTopGdp } from "@/src/reducers/api";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { ArrowRight, Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function TopByGdp() {
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const countries = useAppSelector((state) => state.todos.topGdpData);
  const t = useTranslations("TopByGdp");

  useEffect(() => {
    dispatch(getCountriesTopGdp(locale));
  }, [dispatch]);

  if (!countries || countries.length === 0) {
    return <p>Loading countries...</p>;
  }

  return (
    <div className="max-w-[1400px] mx-auto mt-6 px-2 sm:px-4 font-mont">
      {/* Title */}
      <h1 className="text-[20px] font-semibold sm:text-[42px] leading-[100%]">
        {t("text")}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 justify-items-center">
        {countries.slice(0, 6).map((c) => (
          <div
            key={c.id}
            className="
              relative 
              w-[160px] sm:w-[280px] lg:w-[385px] 
              h-[220px] sm:h-[320px] lg:h-[500px] 
              rounded-[10px] sm:rounded-[25px] lg:rounded-[25px] overflow-hidden group cursor-pointer
            "
          >
            {/* Background */}
            <img
              src={`http://127.0.0.1:8000/${c.image || c.flag}`}
              alt={c.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Flag + Heart (БЕЗ изменений размеров) */}
            <div className="absolute left-4 sm:left-6 lg:left-8 top-3 sm:top-5 lg:top-6 flex items-center gap-15 lg:gap-40">
              <img
                src={`http://127.0.0.1:8000/${c.flag}`}
                alt="flag"
                className="w-[40px] h-[30px] sm:w-[95px] sm:h-[60px] object-cover rounded-[2px] sm:rounded-md shadow-md"
              />

              <div className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition">
                <Heart className="text-white w-[16px] sm:w-[24px]" />
              </div>
            </div>

            {/* Bottom */}
            <div className="absolute bottom-2 sm:bottom-4 w-full px-2 sm:px-3">
              <div className="flex justify-between items-end text-white mb-2 sm:mb-3 sm:pl-4 sm:pr-4">
                <h2 className="text-[12px] sm:text-[18px] lg:text-[32px] font-medium leading-[100%]">
                  {c.name}
                </h2>

                {c.population && (
                  <span className="text-[10px] sm:text-sm opacity-80">
                    $ {c.population.toLocaleString()}
                  </span>
                )}
              </div>

              <Link href={`/countries/${c.id}`}>
                <button className="group relative w-full flex items-center justify-between px-2 sm:px-5 py-1.5 sm:py-2.5 rounded-full overflow-hidden backdrop-blur-md bg-white/10 transition hover:opacity-90 cursor-pointer">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#4D99BB]/30 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full"></span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4D99BB] to-white blur-xl opacity-15 group-hover:opacity-30 transition"></span>
  
                  <span className="relative z-10 text-white text-[12px] sm:text-[16px] lg:text-[20px] font-medium">
                    {t("button1")}
                  </span>
  
                  <span className="relative z-10 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center transition group-hover:bg-white/50">
                    <ArrowRight className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] lg:w-[16px] lg:h-[16px] text-[#1D1B20]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom button */}
      <div className="flex justify-center">
        <button className="w-full sm:w-[176px] h-[45px] sm:h-[50px] rounded-[25px] bg-[#D1DFD8] text-[16px] sm:text-[18px] font-semibold mt-6 sm:mt-10 cursor-pointer">
          {t("button")}
        </button>
      </div>
    </div>
  );
}