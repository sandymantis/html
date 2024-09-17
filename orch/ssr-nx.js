// pages/ssr.js
import { useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from the Dog Facts API on the server side
  const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
  const data = await res.json();

  // Select a random fact from the data
  const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];

  return {
    props: {
      initialFact: randomFact, // Pass the random fact as a prop to the page
    },
  };
}

export default function SSRPage({ initialFact }) {
  // State to hold the current dog fact
  const [fact, setFact] = useState(initialFact);

  // Function to fetch a new random dog fact
  const fetchNewFact = async () => {
    const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
    const data = await res.json();
    const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];
    setFact(randomFact); // Update the state with the new fact
  };

  return (
    <div>
      <h1>Server-Side Rendered Dog Fact</h1>
      <p>{fact}</p>
      <button onClick={fetchNewFact}>Get Another Dog Fact</button>
    </div>
  );
}





// pages/ssr.js
import { useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from the Dog Facts API on the server side
  const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
  const data = await res.json();

  // Select a random fact from the data
  const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];

  return {
    props: {
      initialFact: randomFact, // Pass the random fact as a prop to the page
    },
  };
}

export default function SSRPage({ initialFact }) {
  // State to hold the current dog fact
  const [fact, setFact] = useState(initialFact);

  // Function to fetch a new random dog fact
  const fetchNewFact = async () => {
    const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
    const data = await res.json();
    const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];
    setFact(randomFact); // Update the state with the new fact
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🐶 Dog Fact of the Moment</h1>
      <ul style={styles.factList}>
        <li style={styles.factItem}>{fact}</li>
      </ul>
      <button style={styles.button} onClick={fetchNewFact}>
        Get Another Dog Fact
      </button>
    </div>
  );
}

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
    boxShadow: '0 2px 4px rgba(0
