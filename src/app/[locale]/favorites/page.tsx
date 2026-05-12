import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Plus } from 'lucide-react'

const Favorites = () => {
  const t = useTranslations("Favorites")

  return (
    <div className="flex flex-col items-center overflow-hidden mt-10">
      <div className="flex items-center justify-between w-full font-mont px-4">
        <Image
          src="/leftIcon.png"
          alt="icon"
          width={90}
          height={106}
          className="w-[40px] sm:w-[90px] h-auto"
        />

        <div className="flex flex-col items-center justify-center gap-[10px] text-center">
          <h1 className="text-[22px] sm:text-[48px] leading-[110%]">
            {t("text")}
          </h1>
          <h1 className="text-[22px] sm:text-[48px] leading-[110%]">
            {t("text2")}
          </h1>
        </div>

        <Image
          src="/rightIcon.png"
          alt="icon"
          width={90}
          height={106}
          className="w-[40px] sm:w-[90px] h-auto"
        />
      </div>

      <button className="w-[146px] h-[50px] rounded-[25px] bg-[#D1DFD8] font-mont flex items-center justify-evenly mt-[30px] cursor-pointer realtive z-10">
        <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
          <Plus />
        </div>

        <h1 className="sm:text-[24px] font-medium flex">
          {t("add")
            .split(" ")
            .map((word, index) => {
              const isRussian = /[а-яА-ЯЁё]/.test(word)

              return (
                <span
                  key={index}
                  className={
                    isRussian
                      ? "font-mont text-[18px] sm:text-[15px] font-[600]"
                      : "font-font text-[24px]"
                  }
                >
                  {word}&nbsp;
                </span>
              )
            })}
        </h1>
      </button>
    </div>
  )
}

export default Favorites
