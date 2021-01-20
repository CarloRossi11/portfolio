import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout"
import MDList from "../components/MDList"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const Index = ({allMD}) => {
  
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        // determines where in the scroll the navbar will dropdown
        document.documentElement.scrollTop > 360
      ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-75px";
      }
    }
  }

  return (
    <Layout>
      <div className="aboutsec">
        <div className="about">
          <h4 className="subtitle">- About -</h4>
          <p>I'm a software engineer with a background in procurement and project management. I have experience working directly with customers to help meet and exceed their goals. I'm always looking for new ways to increase my skill set and bring an increased value to those I work with.</p>
        </div>
        <img id="los" src="/Lean_Cropped.png"></img>
      </div>
      <div className="skillssec">
        <h4 className="subtitle">- Skills -</h4>
        <p className="skills">HTML5 | CSS | JavaScript | jQuery | Bootstrap | Git | Git Hub | Express | NodeJs | MongoDB | NoSQL | React | Ruby | Ruby on Rails | SQL | Next.js | PostgreSQL | Svelte </p>
      </div>
      <h4>- Projects -</h4>
      <MDList posts={allMD}/>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const allMD = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../markdown', true, /\.md$/))

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      allMD
    },
  }
}
