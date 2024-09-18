export default function SSRPage() {
  // Create the container div
  const container = document.createElement('div');
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.padding = '20px';
  container.style.maxWidth = '600px';
  container.style.margin = '0 auto';
  container.style.textAlign = 'center';

  // Create the heading
  const heading = document.createElement('h1');
  heading.textContent = '🐶 Dog Fact of the Moment';
  heading.style.fontSize = '24px';
  heading.style.marginBottom = '20px';
  heading.style.color = '#333';
  container.appendChild(heading);

  // Create the fact list container
  const factList = document.createElement('ul');
  factList.style.listStyleType = 'none';
  factList.style.padding = 0;
  container.appendChild(factList);

  // Function to fetch and display a new fact
  async function fetchAndDisplayFact() {
    // Fetch the dog fact
    const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
    const data = await res.json();
    const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];

    // Clear any existing facts
    factList.innerHTML = '';

    // Create a list item for the fact
    const factItem = document.createElement('li');
    factItem.textContent = randomFact;
    factItem.style.background = '#f9f9f9';
    factItem.style.padding = '15px';
    factItem.style.marginBottom = '10px';
    factItem.style.borderRadius = '5px';
    factItem.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    factItem.style.fontSize = '18px';
    factList.appendChild(factItem);
  }

  // Create the button to fetch a new fact
  const button = document.createElement('button');
  button.textContent = 'Get Another Dog Fact';
  button.style.backgroundColor = '#0070f3';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '5px';
  button.style.marginTop = '20px';
  button.addEventListener('click', fetchAndDisplayFact);
  container.appendChild(button);

  // Fetch the initial fact when the component is first created
  fetchAndDisplayFact();

  return container;
}
