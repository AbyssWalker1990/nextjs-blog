import { getSortedPostsData } from "@/lib/posts"
import { notFound } from 'next/navigation'

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

  return (
    <div>page</div>
  )
}

export default Post