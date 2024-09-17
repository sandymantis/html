// pages/ssr.js
import { useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from the Dog Facts API on the server side
  const res = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all');
  const data = await res.json();

  // Select a random fact from the data
  const randomFact = data[Math.floor(Math.random() * data.length)];

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
    const res = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all');
    const data = await res.json();
    const randomFact = data[Math.floor(Math.random() * data.length)];
    setFact(randomFact); // Update the state with the new fact
  };

  return (
    <div>
      <h1>Server-Side Rendered Dog Fact</h1>
      <p>{fact.fact}</p>
      <button onClick={fetchNewFact}>Get Another Dog Fact</button>
    </div>
  );
}
