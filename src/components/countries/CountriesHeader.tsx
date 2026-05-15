"use client";

import RandomCountryButton from "./RandomCountryButton";

type Props = {
  onRandom: () => void;
};

export default function CountriesHeader({
  onRandom,
}: Props) {
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between font-mont">

      <div>
        <h1 className="text-[42px] font-black leading-none text-[#0F172A]">
          Explore Countries
        </h1>

        <p className="mt-3 text-gray-500">
          Discover countries, population, GDP, capitals and more.
        </p>
      </div>

      <RandomCountryButton onClick={onRandom} />
    </div>
  );
}