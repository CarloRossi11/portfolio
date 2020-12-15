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
                <Link href={{ pathname: `/mark/${post.slug}` }}>
              
                  <a><h5>{post.frontmatter.title}</h5></a>
                  
                </Link>
                <Link href={{ pathname: `/mark/${post.slug}` }}>
              
                <p className="lildesc">{post.frontmatter.description}</p>
                  
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
