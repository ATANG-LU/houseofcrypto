"use client";

import { useMemo, useState } from "react";
import PostCard from "./PostCard";
import { ArrowIcon } from "./Icons";
import { CATEGORIES, type Post } from "@/lib/posts";

const PER_PAGE = 6;

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [cat, setCat] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => (cat === "All" ? posts : posts.filter((p) => p.category === cat)), [cat, posts]);
  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[34px] font-medium lg:text-[40px]">Latest Posts</h2>
        <div className="flex flex-wrap gap-3">
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(c);
                setPage(1);
              }}
              className={`rounded-full px-6 py-2.5 text-[15px] transition-colors ${
                cat === c ? "bg-brand" : "bg-slate hover:bg-[#262d4f]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>

      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate disabled:opacity-40"
            aria-label="Previous page"
          >
            <ArrowIcon dir="left" />
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`text-[16px] ${n === page ? "text-brand-soft" : "text-white"}`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-navy disabled:opacity-40"
            aria-label="Next page"
          >
            <ArrowIcon />
          </button>
        </div>
      )}
    </>
  );
}
