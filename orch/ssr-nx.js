async function loadHTML(url) {
  try {
    const response = await fetch(url);
    const htmlString = await response.text();

    // Create a DOM parser
    const parser = new DOMParser();
    const fetchedDocument = parser.parseFromString(htmlString, "text/html");

    // Get current document's head and body
    const currentHead = document.head;
    const currentBody = document.body;
Here’s a summary of your message to the team, highlighting the need for a cultural shift, while maintaining a positive and constructive tone:

\=
---

This version of the message should help communicate your position clearly, while emphasizing collaboration and the benefits of shifting focus. Let me know if you need any adjustments!
    // Get fetched document's head and body
    const fetchedHead = fetchedDocument.head;
    const fetchedBody = fetchedDocument.body;

    // Replace current head content but remove all script tags first
    currentHead.innerHTML = fetchedHead.innerHTML;
    currentHead.querySelectorAll('script').forEach(script => script.remove());

    // Replace current body content
    currentBody.innerHTML = fetchedBody.innerHTML;

    // Get all scripts from fetched document
    const scripts = fetchedDocument.querySelectorAll('script');

    // Append each script as a new script tag to the current head
    scripts.forEach(fetchedScript => {
      const newScript = document.createElement('script');
      newScript.src = fetchedScript.src;
      newScript.textContent = fetchedScript.textContent;
      currentHead.appendChild(newScript);
    });
  } catch (error) {
    console.error("Error fetching or processing HTML:", error);
  }
}

loadHTML('https://example.com/page'); // Replace with your target URL
