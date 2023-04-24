import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from 'next/navigation'
import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

export function generateMetadata({ params }: { params: { postId: string }}) {

  const posts = getSortedPostsData()  // deduped
  const  { postId } = params
  const post = posts.find(post => post.id === postId)
  if (!post) {
    return {
      title: 'post Not Found'
    }
  }

  return {
    title: post.title,
  }
}

async function Post({ params }: { params: { postId: string }}) {

  const posts = getSortedPostsData()  // deduped
  const  { postId } = params

  if (!posts.find(post => post.id === postId)) {
    return notFound()
  }

  const  { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 prose prose-xl prose-slate mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">
        {pubDate}
      </p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/'>Back to Home</Link>
        </p>
      </article>
    </main>
  )
}

export default Post