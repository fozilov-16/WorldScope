"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import {
  ArrowLeft,
  Users,
  Globe,
  Landmark,
  Clock3,
  Phone,
  MapPinned,
  Building2,
  Languages,
  Sparkles,
  BadgeDollarSign,
} from "lucide-react";

import { getCountryById } from "@/src/reducers/api";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/store/hooks";

const getImageUrl = (path?: string) => {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  return `https://geo-world-compilelord.duckdns.org${
    path.startsWith("/") ? path : `/${path}`
  }`;
};

export default function CountryId() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const locale = useLocale();

  const { id } = useParams();

  const country = useAppSelector(
    (state) => state.todos.countryById
  );

  const loading = useAppSelector(
    (state) => state.todos.loading
  );

  useEffect(() => {
    if (id) {
      dispatch(
        getCountryById({
          id: Number(id),
          locale,
        })
      );
    }
  }, [dispatch, id, locale]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4F7FB]">
        <div className="text-xl font-medium text-slate-500 animate-pulse">
          Loading country...
        </div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4F7FB]">
        <div className="text-xl font-medium text-red-500">
          Country not found
        </div>
      </div>
    );
  }

  const bgImage = getImageUrl(
    country.image || country.flag
  );

  const flag = getImageUrl(country.flag);

  return (
    <div className="min-h-screen bg-[#F4F7FB] pb-24 font-mont">

      {/* HERO */}
      <div className="relative h-[650px] overflow-hidden">

        {/* IMAGE */}
        <img
          src={bgImage}
          alt={country.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1450px] flex-col px-4">

          {/* TOP */}
          <div className="flex items-center justify-between pt-8">

            <button
              onClick={() => router.back()}
              className="flex h-[52px] items-center gap-2 rounded-full bg-white/15 px-5 text-white backdrop-blur-xl transition hover:bg-white/25 cursor-pointer"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <img
              src={flag}
              alt={country.name}
              className="h-[55px] w-[80px] rounded-xl object-cover shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-auto pb-16">

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              {/* TAGS */}
              <div className="mb-6 flex flex-wrap gap-3">

                <div className="rounded-full bg-white/15 px-5 py-2 text-sm text-white backdrop-blur-xl">
                  {country.continent_display}
                </div>

                <div className="rounded-full bg-white/15 px-5 py-2 text-sm text-white backdrop-blur-xl">
                  {country.nationality}
                </div>
              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl text-[55px] font-black leading-none text-white md:text-[90px]">
                {country.name}
              </h1>

              {/* CAPITAL */}
              <div className="mt-5 flex items-center gap-2 text-white/85">

                <MapPinned size={18} />

                <span className="text-lg">
                  {country.capital}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-3xl text-lg leading-[180%] text-white/80">
                {country.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto -mt-20 max-w-[1450px] px-4 relative z-20">

        {/* STATS */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">

          <StatCard
            icon={<Users size={22} />}
            title="Population"
            value={country.population?.toLocaleString()}
          />

          <StatCard
            icon={<Globe size={22} />}
            title="Area"
            value={`${country.area?.toLocaleString()} km²`}
          />

          <StatCard
            icon={<BadgeDollarSign size={22} />}
            title="GDP"
            value={`$${country.gdp}T`}
          />

          <StatCard
            icon={<Clock3 size={22} />}
            title="Timezone"
            value={country.time_zone}
          />

          <StatCard
            icon={<Phone size={22} />}
            title="Calling Code"
            value={country.calling_code}
          />
        </div>

        {/* INFO */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* CULTURE */}
          <InfoCard
            title="Culture & Society"
            icon={<Sparkles />}
          >
            <InfoRow
              label="Religion"
              value={country.religion}
            />

            <InfoRow
              label="Languages"
              value={country.languages?.join(", ")}
            />

            <InfoRow
              label="Nationality"
              value={country.nationality}
            />
          </InfoCard>

          {/* GOVERNMENT */}
          <InfoCard
            title="Government"
            icon={<Landmark />}
          >
            <InfoRow
              label="Government Type"
              value={country.government_type}
            />

            <InfoRow
              label="President"
              value={country.president}
            />

            <InfoRow
              label="Currency"
              value={country.currency}
            />
          </InfoCard>

          {/* GEOGRAPHY */}
          <InfoCard
            title="Geography"
            icon={<Languages />}
          >
            <InfoRow
              label="Capital"
              value={country.capital}
            />

            <InfoRow
              label="Largest City"
              value={country.largest_city}
            />

            <InfoRow
              label="Continent"
              value={country.continent_display}
            />
          </InfoCard>
        </div>

        {/* HISTORY */}
        <div className="mt-10 overflow-hidden rounded-[35px] bg-white shadow-xl">

          <div className="border-b border-slate-100 px-8 py-6">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Building2 />
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Historical Background
                </p>

                <h2 className="text-3xl font-bold text-slate-900">
                  History
                </h2>
              </div>
            </div>
          </div>

          <div className="px-8 py-8">

            <p className="leading-[210%] text-slate-600">
              {country.history}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====================== */

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[28px] bg-white p-5 shadow-lg mt-5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-bold text-slate-900">
        {value}
      </h3>
    </motion.div>
  );
}

/* ====================== */

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[35px] bg-white p-7 shadow-xl"
    >

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="space-y-5">
        {children}
      </div>
    </motion.div>
  );
}

/* ====================== */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-slate-100 pb-4">

      <p className="text-sm text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-slate-700">
        {value}
      </p>
    </div>
  );
}