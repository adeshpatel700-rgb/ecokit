import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getPosts } from "@/lib/content";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on sustainable materials, hospitality amenities and running a lower-waste property — from the EcoKit team.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <main id="main">
      <PageHero
        label="Journal"
        title={<>Notes on Doing<br />Things Better.</>}
        lead="Materials, process and what we learn supplying hotels and businesses across India."
      />
      <section className="section" style={{ paddingTop: "var(--space-6)" }}>
        <div className="container">
          {posts.length === 0 ? (
            <div className="products-empty">
              <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Nothing published yet</p>
              <p>The first article is on its way.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card" data-reveal>
                  <Link href={`/blog/${post.slug}`} className="blog-card__media">
                    {post.coverImage
                      ? <Image src={post.coverImage} alt={post.coverAlt} width={600} height={400} sizes="(max-width: 900px) 100vw, 33vw" />
                      : <span className="blog-card__placeholder" aria-hidden="true" />}
                  </Link>
                  <div className="blog-card__body">
                    <p className="blog-card__date">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <h2 className="blog-card__title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                    {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
