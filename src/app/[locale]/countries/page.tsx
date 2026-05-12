"use client";

import React, { useEffect, useState, useMemo } from "react";
import { getCountries } from "@/src/reducers/api";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { ArrowRight, Heart, Search } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

const getImageUrl = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `https://geo-world-compilelord.duckdns.org${
    path.startsWith("/") ? path : `/${path}`
  }`;
};

export default function Countries() {
  const dispatch = useAppDispatch();
  const locale = useLocale();

  const { data: countries, loading } = useAppSelector(
    (state) => state.todos
  );

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [continent, setContinent] = useState("all");
  const [filterType, setFilterType] = useState("none");
  const [page, setPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(getCountries(locale));
  }, [dispatch, locale]);

  // 🌍 уникальные континенты
  const continents = [...new Set(countries?.map((c) => c.continent))];

  // 🔍 FILTER + SORT
  const filtered = useMemo(() => {
    let result = [...(countries || [])];

    // search
    if (search) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // continent filter
    if (continent !== "all") {
      result = result.filter((c) => c.continent === continent);
    }

    // extra filter
    if (filterType === "area") {
      result.sort((a, b) => b.area - a.area);
    }

    if (filterType === "population") {
      result.sort((a, b) => b.population - a.population);
    }

    // sort
    if (sort === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "za") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [countries, search, sort, continent, filterType]);

  // 📄 PAGINATION
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">

      {/* 🔥 TOP CONTROLS */}
      <div className="flex flex-col gap-4 mb-8">

        {/* SEARCH */}
        <div className="relative">
          <input
            placeholder="Search countries..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full h-[50px] rounded-full bg-[#0A1E34] text-white pl-12 pr-4"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3">

          {/* SORT */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-[45px] px-4 rounded-full bg-[#0A1E34] text-white"
          >
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>

          {/* CONTINENT */}
          <select
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            className="h-[45px] px-4 rounded-full bg-[#0A1E34] text-white"
          >
            <option value="all">All continents</option>
            {continents.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* EXTRA FILTER */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="h-[45px] px-4 rounded-full bg-[#0A1E34] text-white"
          >
            <option value="none">No filter</option>
            <option value="area">Top by Area</option>
            <option value="population">Top by Population</option>
          </select>
        </div>
      </div>

      {/* 🌍 GRID (ТВОЙ ДИЗАЙН) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((c) => {
          const bgImage = getImageUrl(c.image || c.flag);
          const flag = getImageUrl(c.flag);

          return (
            <div
              key={c.id}
              className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={bgImage}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30" />

              {/* TOP */}
              <div className="absolute top-4 left-4 flex gap-3">
                <img src={flag} className="w-10 h-6 rounded" />
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="text-white" />
                </div>
              </div>

              {/* BOTTOM */}
              <div className="absolute bottom-4 w-full px-4 text-white">
                <div className="flex justify-between mb-2">
                  <h2 className="text-lg font-semibold">{c.name}</h2>
                  <span className="text-sm">
                    {c.area?.toLocaleString()} km²
                  </span>
                </div>

                <Link href={`/countries/${c.id}`}>
                  <button className="w-full flex justify-between items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition cursor-pointer">
                    <span>Learn more</span>
                    <ArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📄 PAGINATION */}
      <div className="flex justify-center gap-2 mt-10">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 rounded-full cursor-pointer ${
              page === i + 1
                ? "bg-[#0A1E34] text-white"
                : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}