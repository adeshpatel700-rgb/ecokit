import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/content";
import { SITE } from "@/lib/site";
import PostBody from "@/components/PostBody";

export const revalidate = 300;

interface Params { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverAlt }] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    ...(post.coverImage ? { image: post.coverImage } : {}),
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="page-hero">
          <div className="container">
            <div className="post-head">
              <p className="post-head__meta">
                <Link href="/blog">Journal</Link>
                <span aria-hidden="true"> · </span>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h1>{post.title}</h1>
              {post.excerpt && <p className="page-hero__lead">{post.excerpt}</p>}
            </div>
          </div>
        </header>

        {post.coverImage && (
          <div className="container">
            <div className="post-cover">
              <Image src={post.coverImage} alt={post.coverAlt} width={1200} height={675} priority sizes="100vw" />
            </div>
          </div>
        )}

        <section className="section" style={{ paddingTop: "var(--space-6)" }}>
          <div className="container">
            <PostBody body={post.body} />
            <p className="post-back"><Link href="/blog">← All articles</Link></p>
          </div>
        </section>
      </article>
    </main>
  );
}
