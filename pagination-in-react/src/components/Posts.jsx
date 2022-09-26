import React from "react";

export default function Posts({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return (
            <li>
              {index + 1}. {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
