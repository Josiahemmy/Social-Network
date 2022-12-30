/* eslint-disable no-undef */
// /* eslint-disable no-undef

// import React, { useEffect, useState } from "react";

// import Post from "./Post";

// function Feed() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Retrieve the list of posts from the database or API
//     const postsData = retrievePosts();
//     setPosts(postsData);
//   }, []);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4">
//       {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </div>
//   );
// }

// export default Feed;

import React, { useEffect, useState } from "react";

import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve the list of posts from the API
    retrievePosts().then((postsData) => {
      setPosts(postsData);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
