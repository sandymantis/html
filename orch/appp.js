import React, { useState, useEffect } from 'react';

// A functional component to display a list of posts
function App() {
  const [posts, setPosts] = useState([]);  // State to hold the fetched posts
  const [loading, setLoading] = useState(true);  // State to manage the loading state

  // Function to fetch posts with a random limit between 1 and 10
  const fetchPosts = () => {
    const randomLimit = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    setLoading(true);  // Set loading to true before making the API call

    // Public API call to fetch posts with the random limit
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${randomLimit}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);  // Set the posts state with the fetched data
        setLoading(false);  // Set loading to false as the data is fetched
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);  // Set loading to false even if there's an error
      });
  };

  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    fetchPosts();  // Fetch posts when the component first mounts
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  // Render the component
  return (
    <div className="app-container">
      <header>
        <h1>My React Blog</h1>
        <p>Fetching posts from a public API</p>
      </header>

      <main>
        <button onClick={fetchPosts}>Refresh Posts</button> {/* Button to refresh posts */}
        {loading ? (
          <p>Loading posts...</p>  // Display a loading message while fetching
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
      </main>

      <footer>
        <p>&copy; 2024 My React Blog</p>
      </footer>
    </div>
  );
}

export default App;
