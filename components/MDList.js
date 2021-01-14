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
                  <a><h5>{post.frontmatter.title}</h5></a>
                  <p className="lildesc">{post.frontmatter.description}</p>
                  <p className="lildesc">{post.frontmatter.technologies}</p>
                  <a className="checkit" href={post.frontmatter.link} target="_blank">GitHub</a>
                  <a className="checkit" href={post.frontmatter.link2} target="_blank">Live Demo</a>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
