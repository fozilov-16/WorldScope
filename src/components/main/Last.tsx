import React from "react";
import { useTranslations } from "next-intl";

const Last = () => {
  const t = useTranslations("last");

  return (
    <div className="
      relative
      mt-10
      max-w-[1200px]
      mx-auto
      px-4
      flex flex-col
      items-center
      justify-center
      gap-4 sm:gap-6
      text-center
      font-mont
    ">

      <h1 className="text-[26px] sm:text-[64px] font-semibold leading-[120%]">
        {t("text")}
      </h1>

      <h1 className="text-[26px] sm:text-[64px] font-semibold leading-[110%]">
        {t("text2")}
      </h1>

      <p className="text-[13px] sm:text-[20px] font-medium opacity-80 max-w-[800px]">
        {t("text3")}
      </p>

      <button className="
        w-[160px] sm:w-[174px]
        h-[46px] sm:h-[50px]
        rounded-full
        bg-[#D1DFD8]
        text-[14px] sm:text-[18px]
        font-semibold
        cursor-pointer
        transition
        hover:scale-105
      ">
        {t("button")}
      </button>

    </div>
  );
};

export default Last;