"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { toast } from "sonner";

import {
  getCountries,
  getCountryRandom,
} from "@/src/reducers/api";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/store/hooks";

import CountriesHeader from "@/src/components/countries/CountriesHeader";
import CountriesFilters from "@/src/components/countries/CountriesFilters";
import CountriesGrid from "@/src/components/countries/CountriesGrid";
import Pagination from "@/src/components/countries/Pagination";

export default function Countries() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const locale = useLocale();

  const { data: countries, loading } = useAppSelector(
    (state) => state.todos
  );

  // STATES
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [continent, setContinent] = useState("all");
  const [filterType, setFilterType] = useState("none");
  const [page, setPage] = useState(1);

  const itemsPerPage = 8;

  // FETCH
  useEffect(() => {
    dispatch(getCountries(locale));
  }, [dispatch, locale]);

  // RANDOM COUNTRY
  const handleRandomCountry = async () => {
    try {
      const result = await dispatch(
        getCountryRandom(locale)
      ).unwrap();

      toast.success("Random country loaded!");

      router.push(`/countries/${result.id}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // CONTINENTS
  const continents = [
    ...new Set(
      countries
        ?.map((c) => c.continent)
        .filter(Boolean)
    ),
  ];

  // FILTER + SORT
  const filteredCountries = useMemo(() => {
    let result = [...(countries || [])];

    // SEARCH
    if (search) {
      result = result.filter((c) =>
        c.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // CONTINENT
    if (continent !== "all") {
      result = result.filter(
        (c) => c.continent === continent
      );
    }

    // FILTERS
    if (filterType === "population") {
      result.sort(
        (a, b) =>
          (b.population ?? 0) -
          (a.population ?? 0)
      );
    }

    if (filterType === "area") {
      result.sort(
        (a, b) =>
          (b.area ?? 0) -
          (a.area ?? 0)
      );
    }

    if (filterType === "gdp") {
      result.sort(
        (a, b) =>
          (b.gdp ?? 0) -
          (a.gdp ?? 0)
      );
    }

    // SORT
    if (sort === "az") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "za") {
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return result;
  }, [
    countries,
    search,
    continent,
    filterType,
    sort,
  ]);

  // PAGINATION
  const totalPages = Math.ceil(
    filteredCountries.length / itemsPerPage
  );

  const paginatedCountries =
    filteredCountries.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );

  if (loading) {
    return (
      <p className="mt-20 text-center text-xl">
        Loading countries...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB] px-4 py-10">

      <div className="mx-auto max-w-[1450px]">

        {/* HEADER */}
        <CountriesHeader
          onRandom={handleRandomCountry}
        />

        {/* FILTERS */}
        <CountriesFilters
          search={search}
          setSearch={setSearch}
          continent={continent}
          setContinent={setContinent}
          sort={sort}
          setSort={setSort}
          filterType={filterType}
          setFilterType={setFilterType}
          continents={continents}
        />

        {/* GRID */}
        <CountriesGrid
          countries={paginatedCountries}
        />

        {/* PAGINATION */}
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}