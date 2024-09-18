// pages/csr.js
import { useEffect, useState } from 'react';

export default function CSRPage() {
  // State to store the dog fact
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a new dog fact from the API
  const fetchDogFact = async () => {
    try {
      setLoading(true); // Set loading to true while fetching
      setError(null);   // Reset error state
      const res = await fetch('https://dog-api.kinduff.com/api/facts?number=1');
      const data = await res.json();

      // Set the fetched dog fact in state
      setFact(data.facts[0]);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError('Failed to fetch the dog fact');
      setLoading(false);
    }
  };

  // useEffect to fetch the fact when the component first mounts
  useEffect(() => {
    fetchDogFact(); // Fetch the fact initially on component mount
  }, []);

  // Render the loading state, error state, or the dog fact, along with a button to fetch new facts
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Client-Side Rendered Dog Fact</h1>

      {loading && <p>Loading...</p>} {/* Show loading state */}
      {error && <p>{error}</p>}      {/* Show error state */}
      {fact && (
        <ul style={styles.factList}>
          <li style={styles.factItem}>{fact}</li>
        </ul>
      )}

      {/* Button to refresh the dog fact */}
      <button style={styles.button} onClick={fetchDogFact} disabled={loading}>
        Get Another Dog Fact
      </button>
    </div>
  );
}

// Basic styling
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  factList: {
    listStyleType: 'none',
    padding: 0,
  },
  factItem: {
    background: '#f9f9f9',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
  },
};
