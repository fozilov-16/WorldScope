"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { getCountryById } from "@/src/reducers/api";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { useLocale } from "next-intl";

const getImageUrl = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  return `https://geo-world-compilelord.duckdns.org${
    path.startsWith("/") ? path : `/${path}`
  }`;
};

export default function CountryId() {
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const { id } = useParams();

  const country = useAppSelector((state) => state.todos.countryById);
  const loading = useAppSelector((state) => state.todos.loading);

  useEffect(() => {
    if (id) {
      dispatch(getCountryById({ id: Number(id), locale }));
    }
  }, [id, locale]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  if (!country)
    return <p className="text-center mt-6">Country not found</p>;

  return (
    <div className="max-w-[1000px] mx-auto mt-10 p-6">
      
      {/* IMAGE */}
      <img
        src={getImageUrl(country.image || country.flag)}
        alt={country.name}
        className="w-full h-[400px] object-cover rounded-xl mb-6"
      />

      {/* NAME */}
      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>

      {/* INFO */}
      <div className="space-y-2 text-lg">
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Area:</strong> {country.area}</p>
        <p><strong>Region:</strong> {country.continent_display}</p>
      </div>

    </div>
  );
}