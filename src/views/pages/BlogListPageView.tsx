import { Link } from 'react-router-dom'

import { BLOG_POSTS } from '../../models/blog.model'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

export function BlogListPageView() {
  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER}`}>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-400">
        Notes on lakehouses, reliability, and how teams ship analytics without losing
        control.
      </p>
      <ul className="mt-12 flex flex-col gap-8">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <article className="rounded-2xl border border-white/10 bg-white/3 p-8 transition hover:border-emerald-400/25">
              <time
                dateTime={post.publishedAt}
                className="text-xs font-medium uppercase tracking-wider text-slate-500"
              >
                {post.publishedAt} · {post.readMinutes} min read
              </time>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-emerald-300"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-400">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Continue reading →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
