import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

const Europe = () => {
  const t = useTranslations("Continents")

  return (
    <div className="w-full sm:w-[340px] lg:w-[370px] sm:h-[360px] lg:h-[390px] bg-[#4D99BB] rounded-[32px] p-5 sm:p-6 font-mont text-white flex flex-col justify-between relative overflow-hidden">

      <Image
        src="/europe.png"
        alt="europe map"
        width={230}
        height={156}
        className="absolute top-4 right-2 w-[160px] sm:w-[230px] h-auto"
      />

      <div className="w-[110px] h-[65px] rounded-[10px] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20">
        <p className="text-[20px] font-[400]">44</p>
        <span className="text-sm opacity-80">{t("countries")}</span>
      </div>

      <div className="mt-6">
        <h2 className="text-[26px] sm:text-[30px] lg:text-[33px] font-medium leading-[100%]">
          {t("europe")}
        </h2>
        <p className="text-[14px] sm:text-[15px] mt-2">
          {t("europeText")}
        </p>
      </div>

      <button className="self-end w-[140px] sm:w-[160px] lg:w-[180px] h-[40px] sm:h-[44px] lg:h-[48px] rounded-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 cursor-pointer">
        {t("explore")}
        <ArrowRight className="w-[18px] h-[18px]" />
      </button>

    </div>
  )
}

export default Europe
