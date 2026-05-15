"use client";

import CountryCard from "./CountryCard";

type Props = {
  countries: any[];
};

export default function CountriesGrid({
  countries,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
        />
      ))}
    </div>
  );
}