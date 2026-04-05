import { Link, Navigate, useParams } from 'react-router-dom'

import { getBlogBySlug } from '../../models/blog.model'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

export function BlogPostPageView() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER}`}>
      <Link
        to="/blog"
        className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
      >
        ← All posts
      </Link>
      <article className="mt-8 max-w-3xl">
        <time
          dateTime={post.publishedAt}
          className="text-xs font-medium uppercase tracking-wider text-slate-500"
        >
          {post.publishedAt} · {post.readMinutes} min read
        </time>
        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl text-slate-400">{post.excerpt}</p>
        <div className="mt-10 max-w-none">
          {post.body.map((para, i) => (
            <p key={i} className="mt-6 text-lg leading-relaxed text-slate-300 first:mt-0">
              {para}
            </p>
          ))}
        </div>
      </article>
    </main>
  )
}
