"use client";

import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (v: string) => void;

  continent: string;
  setContinent: (v: string) => void;

  sort: string;
  setSort: (v: string) => void;

  filterType: string;
  setFilterType: (v: string) => void;

  continents: string[];
};

export default function CountriesFilters({
  search,
  setSearch,
  continent,
  setContinent,
  sort,
  setSort,
  filterType,
  setFilterType,
  continents,
}: Props) {
  return (
    <div className="mb-10">

      {/* SEARCH */}
      <div className="relative mb-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search countries..."
          className="h-[60px] w-full rounded-full border border-black/5 bg-white pl-14 pr-5 shadow-lg outline-none"
        />

        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3">

        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-[50px] rounded-full bg-[#0F172A] px-5 text-white outline-none cursor-pointer"
        >
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
        </select>

        {/* CONTINENT */}
        <select
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          className="h-[50px] rounded-full bg-[#0F172A] px-5 text-white outline-none cursor-pointer"
        >
          <option value="all">All Continents</option>

          {continents.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* FILTER */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="h-[50px] rounded-full bg-[#0F172A] px-5 text-white outline-none cursor-pointer"
        >
          <option value="none">No filter</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
          <option value="gdp">GDP</option>
        </select>
      </div>
    </div>
  );
}