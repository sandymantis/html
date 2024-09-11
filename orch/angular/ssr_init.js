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




------------
  async function init(props) {
    try {
        // 1. Fetch the SSR HTML
        const ssrResponse = await fetch('http://localhost:4000');
        const ssrHtml = await ssrResponse.text();

        // 2. Parse the HTML to extract app-complex and scripts
        const parser = new DOMParser();
        const doc = parser.parseFromString(ssrHtml, 'text/html');

        // Extract app-complex element
        const appComplexElement = doc.querySelector('app-complex');

        // Extract script tags
        const scriptTags = Array.from(doc.querySelectorAll('script[src]'));

        // 3. Insert app-complex element into the parent DOM
        const container = document.getElementById('your-container-id');
        container.innerHTML = ''; // Clear any existing content
        if (appComplexElement) {
            container.appendChild(appComplexElement);
        }

        // 4. Append the scripts to the app-complex element
        if (appComplexElement) {
            scriptTags.forEach(script => {
                const scriptElement = document.createElement('script');
                scriptElement.src = script.src;
                // Set attributes for script
                scriptElement.async = true;
                scriptElement.defer = true;
                appComplexElement.appendChild(scriptElement);
            });
        }

    } catch (error) {
        console.error('Error during SSR and script injection:', error);
    }
}
