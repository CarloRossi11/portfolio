import Link from "next/link";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css"

export default function MDList({ posts }) {
  if (posts === "undefined") return null;

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                {/* <Link href={{ pathname: `/mark/${post.slug}` }}> */}
                {/* </Link> */}
                <img data-aos="fade-right" className="screenie" src={post.frontmatter.screenshot} alt="Project Screenshot"></img>
                <div data-aos="fade-left" className="thegoods">
                  <a><h4 className= "projtitle">{post.frontmatter.title}</h4></a>
                  <br></br>
                  <a className="checkit" href={post.frontmatter.link} target="_blank">GitHub</a>
                  <a className="checkit" href={post.frontmatter.link2} target="_blank">Live Demo</a>
                  <p className="lildesc">{post.frontmatter.description}</p>
                  <p className="lildesc">{post.frontmatter.technologies}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
