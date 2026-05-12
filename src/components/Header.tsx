"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Earth,
  Heart,
  MapPin,
} from "lucide-react";

import { Link, usePathname } from "../i18n/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./main/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      href: "/",
      title: t("main"),
      icon: Home,
    },
    {
      href: "/continents",
      title: t("continents"),
      icon: Earth,
    },
    {
      href: "/countries",
      title: t("countries"),
      icon: MapPin,
    },
    {
      href: "/favorites",
      title: t("favorites"),
      icon: Heart,
    },
  ];

  return (
    <header className="w-full sm:relative sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={70}
            className="w-[120px] md:w-[150px] h-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`
                    flex items-center gap-4
                    px-5 py-2.5 rounded-2xl
                    transition-all duration-300
                    hover:scale-105 hover:-translate-y-1
                    shadow-md
                    ${
                      active
                        ? "bg-[#113B66] text-white"
                        : "bg-[#4D99BB] text-white hover:bg-[#113B66]"
                    }
                  `}
                >
                  {/* ICON */}
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shrink-0">
                    <Icon size={18} className="text-black" />
                  </div>

                  {/* TITLE */}
                  <span className="font-mont font-semibold text-[18px] whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* MOBILE LANGUAGE */}
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>

          {/* DESKTOP LANGUAGE */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#113B66] text-white transition-all duration-300 hover:scale-105"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-3 bg-white rounded-3xl p-4 shadow-2xl border border-gray-100">

            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <div
                    className={`
                      flex items-center gap-3
                      px-4 py-3 rounded-2xl
                      transition-all duration-300
                      hover:scale-[1.02]
                      ${
                        active
                          ? "bg-[#113B66] text-white"
                          : "bg-[#4D99BB] text-white"
                      }
                    `}
                  >
                    {/* ICON */}
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0">
                      <Icon size={20} className="text-black" />
                    </div>

                    {/* TITLE */}
                    <span className="font-semibold font-mont text-[18px]">
                      {item.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}