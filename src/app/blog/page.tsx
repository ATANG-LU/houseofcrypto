import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid from "@/components/BlogGrid";
import CoverArt from "@/components/CoverArt";
import Newsletter from "@/components/Newsletter";
import { Tag } from "@/components/PostCard";
import { Container } from "@/components/ui";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];

  return (
    <>
      <section className="pb-20 pt-[150px] lg:pb-24 lg:pt-[180px]">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
            <h1 className="text-[48px] font-medium lg:text-[66px]">Blog</h1>
            <p className="max-w-[540px] leading-8 text-white/90 lg:ml-auto">
              Plain-language guides, security tips and market explainers from the {"House Of Crypto"} team.
            </p>
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-12 grid overflow-hidden rounded-[36px] bg-navy lg:grid-cols-2"
          >
            <div className="order-2 flex flex-col justify-center p-8 lg:order-1 lg:p-12">
              <div>
                <Tag>Featured</Tag>
              </div>
              <h2 className="mt-6 text-[26px] font-medium leading-snug group-hover:underline lg:text-[30px]">{featured.title}</h2>
              <p className="mt-5 leading-8 text-white/90">{featured.excerpt}</p>
            </div>
            <CoverArt variant={featured.cover} className="order-1 h-[240px] lg:order-2 lg:h-[334px]" />
          </Link>
        </Container>
      </section>

      <Newsletter />

      <section className="py-20 lg:py-28">
        <Container>
          <BlogGrid posts={POSTS} />
        </Container>
      </section>
    </>
  );
}
