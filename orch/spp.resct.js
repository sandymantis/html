import React, { useState, useEffect } from 'react';

// This is a simple React component that demonstrates both SSR and CSR
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Generate a random number between min (inclusive) and max (inclusive)
  const getRandomLimit = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Fetch posts from the API with a random limit
  const fetchPosts = async () => {
    setLoading(true);
    const limit = getRandomLimit(3, 8);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>React SSR and CSR Example</h1>
      <button onClick={fetchPosts}>Refresh Posts</button>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
