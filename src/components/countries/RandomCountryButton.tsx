"use client";

import { Dice5 } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function RandomCountryButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="flex h-[60px] items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-7 text-white shadow-xl transition hover:scale-[1.02] cursor-pointer"
    >
      <Dice5 />

      <span className="font-medium font-mont">
        Random Country
      </span>
    </button>
  );
}