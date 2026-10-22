import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoverArt from "@/components/CoverArt";
import Newsletter from "@/components/Newsletter";
import PostCard, { Author } from "@/components/PostCard";
import { Container } from "@/components/ui";
import { POSTS, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pb-24 pt-[150px] lg:pb-32 lg:pt-[180px]">
        <Container>
          <div className="mx-auto max-w-[1000px]">
            <Author name={post.author} date={post.date} />
            <h1 className="mt-8 max-w-[760px] text-[40px] font-medium leading-[1.15] tracking-tight lg:text-[66px]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-white/90">{post.excerpt}</p>
          </div>

          <CoverArt variant={post.cover} className="mt-12 h-[280px] lg:h-[670px]" />

          <div className="prose-hoc mx-auto mt-14 max-w-[780px] text-[17px]">
            {post.body.map((b, i) => {
              if ("figure" in b) {
                return <CoverArt key={i} variant={post.cover + 1} className="my-14 h-[220px] lg:-mx-[106px] lg:h-[500px]" />;
              }
              if ("quote" in b) {
                return (
                  <blockquote
                    key={i}
                    className="my-14 rounded-[36px] bg-navy px-8 py-12 text-[20px] font-medium leading-[1.6] lg:-mx-[106px] lg:px-[190px] lg:py-[86px] lg:text-[24px]"
                  >
                    {b.quote}
                  </blockquote>
                );
              }
              return <div key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
            })}
            <p className="mt-12 border-t border-white/15 pt-6 text-[14px] text-white/55">
              This article is for education only and is not financial advice. Crypto assets are volatile; only invest
              what you can afford to lose.
            </p>
          </div>
        </Container>
      </article>

      <Newsletter />

      <section className="py-20 lg:py-28">
        <Container>
          <h2 className="text-[34px] font-medium lg:text-[40px]">Latest Posts</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
