import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/layout'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <div className="portlink">
          <Link href="/">
            <a className="backtoport">Back to Portfolio</a>
          </Link>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          <a className="checkit" href={frontmatter.link} target="_blank">Check It Out!</a>
          <div className="mdbod">
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
      </Layout>
  )
}


//This takes the slug and imports the data from the proper markdown file
export async function getStaticProps({ ...ctx }) {
  const { page } = ctx.params

  const content = await import(`../../markdown/${page}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}


//This creates a slug for each markdown file in the markdown folder
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../markdown', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/mark/${slug}`)

  return {
    paths,
    fallback: false,
  }
}