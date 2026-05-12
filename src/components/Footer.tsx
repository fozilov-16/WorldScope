import React from "react"
import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  const t = useTranslations("Footer")

  return (
    <footer className="mt-[80px] w-full bg-gradient-to-t from-[#1E599A] via-[#143B66] to-[#0A1E34] font-mont text-white">

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 text-center sm:text-left">

          <h2 className="text-[28px] sm:text-[40px] font-medium leading-[100%]">
            {t("organized")}
          </h2>

          <p className="text-[16px] sm:text-[20px] font-medium opacity-90">
            {t("text")}
          </p>

        </div>

        <div className="w-full h-[1px] bg-white/30 my-10" />

        <div className="flex flex-col gap-8 items-center">

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-center">

            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[16px] sm:text-[18px]">
                {t("contact")}
              </span>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[16px] sm:text-[18px]">
                {t("about")}
              </span>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[16px] sm:text-[18px]">
                {t("top")}
              </span>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-center">

            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[16px] sm:text-[18px]">
                {t("privacy")}
              </span>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[16px] sm:text-[18px]">
                {t("terms")}
              </span>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

          </div>

        </div>

        <Image
        src="/Footer.png"
        alt="worldScoupe"
        width={1081}
        height={519}
        className="w-full h-auto mt-10"
        />
      </div>
    </footer>
  )
}

export default Footer
