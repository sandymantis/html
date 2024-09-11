async function init() {
  try {
    // Fetch the HTML content from the SSR server
    const response = await fetch('http://localhost:4000');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const html = await response.text();

    // Create a temporary DOM element to parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract the app-complex element from the parsed HTML
    const appComplexElement = doc.querySelector('app-complex');

    if (appComplexElement) {
      console.log('Extracted app-complex element:', appComplexElement);

      // Optionally, you can append the element to the DOM
      const reservedElement = document.getElementById('reserved-element');
      if (reservedElement) {
        reservedElement.innerHTML = '';
        reservedElement.appendChild(appComplexElement.cloneNode(true));
      }
    } else {
      console.log('app-complex element not found');
    }
  } catch (error) {
    console.error('Error fetching or processing SSR content:', error);
  }
}

// Call the init function to start the process
init();
