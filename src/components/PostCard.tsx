import Link from "next/link";
import CoverArt from "./CoverArt";
import { LogoMark } from "./Logo";
import { fmtDate, type Post } from "@/lib/posts";

export function Author({ name, date }: { name: string; date: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-white">
        <LogoMark className="h-8" />
      </span>
      <div className="text-[15px] uppercase leading-6 tracking-[0.06em]">
        <p className="font-medium">{name}</p>
        <p className="text-white/85">{fmtDate(date)}</p>
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-brand px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.04em]">
      {children}
    </span>
  );
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[36px] bg-navy transition-transform hover:-translate-y-1"
    >
      <CoverArt variant={post.cover} className="h-[200px] lg:h-[214px]" />
      <div className="flex flex-1 flex-col px-6 pb-8">
        <div className="relative z-10 -mt-4">
          <Tag>{post.category}</Tag>
        </div>
        <h3 className="mt-5 text-[21px] font-medium leading-snug group-hover:underline">{post.title}</h3>
        <p className="mt-4 leading-8 text-white/90">{post.excerpt}</p>
        <div className="mt-auto pt-6">
          <div className="mb-6 h-px bg-white/15" />
          <Author name={post.author} date={post.date} />
        </div>
      </div>
    </Link>
  );
}
