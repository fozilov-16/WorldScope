import Africa from '@/src/components/Continents/Africa'
import Europe from '@/src/components/Continents/Europe'
import NorthAmerica from '@/src/components/Continents/NorthAmerica'
import Asia from '@/src/components/Continents/Asia'
import Image from 'next/image'
import SouthAmerica from '@/src/components/Continents/SouthAmerica'
import Oceania from '@/src/components/Continents/Oceania'
import { useTranslations } from 'next-intl'

const Continents = () => {
  const t = useTranslations("Continents")

  return (
    <div className="relative mt-4 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">

      <header className="flex flex-col gap-3">
        <h1 className="text-[22px] sm:text-[36px] lg:text-[44px] leading-[100%] font-mont">
          {t("text")}
        </h1>

        <div className="flex items-center gap-4">
          <Image
            src="/map.png"
            alt="map"
            width={155}
            height={50}
            className="w-[120px] hidden sm:block sm:w-[155px] h-[40px] sm:h-[50px] rounded-full shadow-lg"
          />
          <h1 className="text-[22px] sm:text-[36px] lg:text-[44px] leading-[100%] font-mont">
            {t("text2")}
          </h1>
        </div>

        <div className="flex items-center sm:gap-4">
          <h1 className="text-[22px] sm:text-[36px] lg:text-[44px] leading-[100%] font-mont">
            {t("text3")}
          </h1>
          <Image src="/Star 3.jpg" alt="star" width={39} height={46} />
        </div>
      </header>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <Asia />
        <Africa />
        <Europe />
        <NorthAmerica />
        <SouthAmerica />
        <Oceania />
      </section>

    </div>
  )
}

export default Continents
