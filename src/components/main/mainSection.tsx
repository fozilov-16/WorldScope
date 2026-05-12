import Image from "next/image";
import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("mainSection");

  return (
    <div className="relative mt-[15px] max-w-[1200px] mx-auto">

      <div className="absolute top-15 sm:top-39 left-1/2 transform -translate-x-1/2 text-center z-10 flex flex-col gap-[30px] items-center">
        <h1 className="text-[28px] w-[375px] sm:text-[48px] sm:w-[778px] sm:h-[96px] leading-[100%] sm:text-center break-words">
            {t("text")
            .split(" ")
            .map((word, index) => {
              const isBlack =
              word.toLowerCase().replace(",", "") === "land" ||
              word.toLowerCase().replace(",", "") === "water" ||
              word.toLowerCase().replace(",", "") === "водой" ||
              word.toLowerCase().replace(",", "") === "земля";
        
              const isRussian = /[а-яА-ЯЁё]/.test(word);
        
              return (
                <span
                  key={index}
                  className={`${isBlack ? "text-[#4D99BB] sm:text-black" : "text-white"} ${isRussian ? "font-mont text-[27px] sm:text-[38px] font-[600] leading-[120%] sm:leading-[100%]" : "font-nico"}`}
                >
                  {word}{" "}
                </span>
              );
            })}
        </h1>

        <button
          className="
            w-[220px] h-[45px]
            sm:w-[250px] sm:h-[55px]
        
            flex items-center justify-center
        
            rounded-full
        
            text-[16px]
            sm:text-[19px]
        
            font-mont font-semibold
            text-white
        
            bg-white/10
            backdrop-blur-xl
            border border-white/20
        
            shadow-[0_8px_32px_rgba(255,255,255,0.12)]
        
            hover:bg-white/20
            hover:scale-105
            hover:-translate-y-1
        
            active:scale-95
        
            transition-all duration-300 ease-out
        
            cursor-pointer
          "
          >         
          {t("join")}
          </button>

        <p className="text-[20px] sm:text-[20px] font-[500] font-mont text-white">{t("text2")}</p>

        <div className="flex flex-col p-2 sm:flex sm:flex-row justify-center gap-3 sm:gap-5 w-full max-w-[600px] mx-auto">
          <button
            className="
              h-[45px] sm:h-[52px]
              px-5 sm:px-7
        
              rounded-full
              cursor-pointer
        
              text-[15px] sm:text-[17px]
        
              font-mont font-semibold
              text-white
        
              bg-white/10
              backdrop-blur-xl
              border border-white/20
        
              shadow-[0_8px_24px_rgba(255,255,255,0.08)]
        
              hover:bg-white/20
              hover:scale-105
              hover:-translate-y-1
        
              active:scale-95
        
              transition-all duration-300 ease-out
            "
          >
            {t("area")}
          </button>
        
          <button
            className="
              h-[45px] sm:h-[52px]
              px-5 sm:px-7
        
              rounded-full
              cursor-pointer
        
              text-[15px] sm:text-[17px]
        
              font-mont font-semibold
              text-white
        
              bg-white/10
              backdrop-blur-xl
              border border-white/20
        
              shadow-[0_8px_24px_rgba(255,255,255,0.08)]
        
              hover:bg-white/20
              hover:scale-105
              hover:-translate-y-1
        
              active:scale-95
        
              transition-all duration-300 ease-out
            "
          >
            {t("population")}
          </button>
        
          <button
            className="
              h-[45px] sm:h-[52px]
              px-5 sm:px-7
        
              rounded-full
              cursor-pointer
        
              text-[15px] sm:text-[17px]
        
              font-mont font-semibold
              text-white
        
              bg-white/10
              backdrop-blur-xl
              border border-white/20
        
              shadow-[0_8px_24px_rgba(255,255,255,0.08)]
        
              hover:bg-white/20
              hover:scale-105
              hover:-translate-y-1
        
              active:scale-95
        
              transition-all duration-300 ease-out
            "
          >
            {t("gdp")}
          </button>
        </div>

      </div>

      <Image
        src="/mainImage.png"
        alt="mainImage"
        width={1200}
        height={531}
        className="rounded-[10px] w-[99%] h-[545px] m-auto sm:w-[1200px] sm:rounded-[45px] sm:h-[531px]"
      />
    </div>
  );
};

export default MainSection;
