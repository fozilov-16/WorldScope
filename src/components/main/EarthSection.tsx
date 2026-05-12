import { useTranslations } from "next-intl";

const EarthSection = () => {
  const t = useTranslations("EarthSection");

  return (
    <div className="flex flex-col items-center text-center gap-6 pb-6 px-3">
      <h1 className="text-[28px] sm:text-[48px] leading-[110%] max-w-[900px]">
        {t("text")
          .split(" ")
          .map((word, index) => {
            const isRussian = /[а-яА-ЯЁё]/.test(word);

            return (
              <span
                key={index}
                className={
                  isRussian
                    ? "font-mont text-[26px] sm:text-[38px] font-[600]"
                    : "font-nico"
                }
              >
                {word}{" "}
              </span>
            );
          })}
      </h1>

      <div className="flex flex-col gap-1">
        <p className="text-[16px] sm:text-[20px] font-mont font-[500]">
          {t("desc1")}
        </p>
        <p className="text-[16px] sm:text-[20px] font-mont font-[500]">
          {t("desc2")}
        </p>
      </div>

      <button className="h-[44px] sm:h-[50px] px-8 rounded-full bg-[#D1DFD8] text-[16px] sm:text-[19px] font-mont font-[600] hover:scale-105 transition-all cursor-pointer">
        {t("button")}
      </button>

      <div className="w-full max-w-[1201px] bg-[#0A1E34] rounded-[24px] sm:rounded-[37px] p-3 sm:p-4">
        <div className="w-full rounded-[18px] sm:rounded-[26px] border border-[#4D99BB] p-3 sm:p-4">
          <div className="grid grid-cols-2 sm:flex sm:justify-between gap-3 sm:gap-5">
            <div className="w-full sm:w-[202px] h-[90px] sm:h-[120px] rounded-[16px] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all">
              <span className="text-[14px] sm:text-[18px] font-mont font-[500] text-white">
                {t("countries")}
              </span>
              <span className="text-[26px] sm:text-[32px] font-mont text-white">
                195
              </span>
            </div>

            <div className="w-full sm:w-[202px] h-[90px] sm:h-[120px] rounded-[16px] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all">
              <span className="text-[14px] sm:text-[18px] font-mont font-[500] text-white">
                {t("languages")}
              </span>
              <span className="text-[26px] sm:text-[32px] font-mont text-white">
                7,100+
              </span>
            </div>

            <div className="w-full sm:w-[202px] h-[90px] sm:h-[120px] rounded-[16px] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all">
              <span className="text-[14px] sm:text-[18px] font-mont font-[500] text-white">
                {t("time")}
              </span>
              <span className="text-[26px] sm:text-[32px] font-mont text-white">
                24
              </span>
            </div>

            <div className="w-full sm:w-[202px] h-[90px] sm:h-[120px] rounded-[16px] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all">
              <span className="text-[14px] sm:text-[18px] font-mont font-[500] text-white">
                {t("population")}
              </span>
              <span className="text-[26px] sm:text-[32px] font-mont text-white">
                8.1B+
              </span>
            </div>

            <div className="col-span-2 sm:col-auto w-full sm:w-[202px] h-[90px] sm:h-[120px] rounded-[16px] flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all">
              <span className="text-[14px] sm:text-[18px] font-mont font-[500] text-white">
                {t("oceans")}
              </span>
              <span className="text-[26px] sm:text-[32px] font-mont text-white">
                5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthSection;
