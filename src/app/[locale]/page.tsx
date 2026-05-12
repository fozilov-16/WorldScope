import EarthSection from "@/src/components/main/EarthSection";
import MainSection from "@/src/components/main/mainSection";
import Continents from "./continents/page";
import CountryOfTheDay from "@/src/components/main/CountryOfTheDay";
import Chart from "@/src/components/main/Chart";
import FlagIdentifier from "@/src/components/main/FlagIdentifier";
import Last from "@/src/components/main/Last";
import PictureDay from "@/src/components/main/PictureDay";
import TopByArea from "@/src/components/main/TopByArea";
import TopByPopulation from "@/src/components/main/TopByPopulation";
import TopByGdp from "@/src/components/main/TopByGdp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <section className="w-full flex justify-center sm:px-6">
        <MainSection />
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <EarthSection />
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <CountryOfTheDay/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <TopByArea/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <PictureDay/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <TopByPopulation/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <Chart/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <TopByGdp/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <FlagIdentifier/>
      </section>

      <section className="w-full flex justify-center mt-16 sm:mt-18 px-3 sm:px-6">
        <Last/>
      </section>
    </main>
  );
}
