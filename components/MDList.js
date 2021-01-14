import Link from "next/link";

export default function MDList({ posts }) {
  if (posts === "undefined") return null;

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
                <img className="screenie" src={post.frontmatter.screenshot} alt="Project Screenshot"></img>
                <div className="thegoods">
                  <a><h4>{post.frontmatter.title}</h4></a>
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
