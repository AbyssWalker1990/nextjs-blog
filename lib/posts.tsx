import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
  // Get filenames under /posts
  const filenames = fs.readdirSync(postsDirectory)
  const allPostsData = filenames.map((filename) => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, '')

    // read markdown files as string
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date
    }

    return blogPost
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}
