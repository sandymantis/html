import React, { useState, useEffect } from 'react';

// This is a simple React component that demonstrates both SSR and CSR
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
          {posts.slice(0, 5).map(post => (
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
