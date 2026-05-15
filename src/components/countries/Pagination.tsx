"use client";

type Props = {
  totalPages: number;
  page: number;
  setPage: (v: number) => void;
};

export default function Pagination({
  totalPages,
  page,
  setPage,
}: Props) {
  return (
    <div className="mt-12 flex justify-center gap-3 flex-wrap">

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`h-11 w-11 rounded-full font-medium transition cursor-pointer ${
            page === i + 1
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}