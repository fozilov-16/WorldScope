"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import {
    Users,
    MapPin,
    BadgeDollarSign,
  } from "lucide-react";

type Props = {
  country: any;
};

const getImageUrl = (path?: string) => {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  return `https://geo-world-compilelord.duckdns.org${
    path.startsWith("/") ? path : `/${path}`
  }`;
};

export default function CountryCard({ country }: Props) {
  const bgImage = getImageUrl(country.image || country.flag);
  const flag = getImageUrl(country.flag);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[420px] overflow-hidden rounded-[30px]"
    >
      {/* IMAGE */}
      <motion.img
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
        src={bgImage}
        alt={country.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

      {/* TOP */}
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <img
          src={flag}
          alt="flag"
          className="h-[38px] w-[58px] rounded-md object-cover shadow-lg"
        />

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition hover:bg-white/20 cursor-pointer">
          <Heart className="text-white" size={18} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 w-full p-5 text-white font-mont">

        {/* NAME */}
        <div className="mb-4">
          <h2 className="text-[28px] font-bold leading-none">
            {country.name}
          </h2>

          {country.capital && (
            <div className="mt-2 flex items-center gap-2 text-white/80">
              <MapPin size={14} />
              <span className="text-sm">{country.capital}</span>
            </div>
          )}
        </div>

        {/* STATS */}
        <div className="mb-5 grid grid-cols-2 gap-3">

          {/* POPULATION */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
            <div className="mb-1 flex items-center gap-2 text-white/70">
              <Users size={14} />
              <span className="text-xs">Population</span>
            </div>

            <p className="text-sm font-semibold">
              {country.population?.toLocaleString()}
            </p>
          </div>

          {/* GDP */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
            <div className="mb-1 flex items-center gap-2 text-white/70">
              <BadgeDollarSign size={14} />
              <span className="text-xs">GDP</span>
            </div>

            <p className="text-sm font-semibold">
              ${country.gdp?.toLocaleString() || "N/A"}
            </p>
          </div>

          {/* AREA */}
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">
                Area
              </span>

              <span className="font-semibold">
                {country.area?.toLocaleString()} km²
              </span>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <Link href={`/countries/${country.id}`}>
          <button className="flex h-[58px] w-full cursor-pointer items-center justify-between rounded-full border border-white/20 bg-white/15 px-5 backdrop-blur-xl transition hover:bg-white/25">
            <span className="font-medium">
              Learn more
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <ArrowRight size={18} />
            </div>
          </button>
        </Link>
      </div>
    </motion.div>
  );
}