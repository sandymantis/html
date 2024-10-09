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

---


I’d like to take a moment to share some thoughts on how we approach building our shared platform, particularly when it comes to designing core components and selecting the right tools for the job.

As we continue to grow and evolve, I believe it's essential to keep the long-term health and scalability of the platform in mind. To achieve this, I strongly advocate for starting with a **well-defined architecture** that is based on **open standards** and free from the influence of specific vendor products. The architecture should serve as the blueprint that guides us and supports the federated development we aim to foster across teams.

Once we have a robust architecture in place, we can then explore tools and frameworks that best help us realize that vision. This approach ensures that the architecture remains future-proof and adaptable to changes over time, rather than being constrained by the limitations of any particular tool or vendor solution.

I’ve noticed that sometimes discussions around tool selection come before we’ve fully established the architecture. This can lead to conversations centered on fitting the architecture around the tool, rather than the other way around. While I understand the enthusiasm to explore new technologies, I believe that our focus should first be on defining a strong architectural foundation and then finding the tools that best align with it.

**What I'm asking for** is a slight shift in how we approach these conversations:
1. Let’s prioritize **architectural clarity** before diving into tool selection.
2. Let’s evaluate tools based on how well they align with and support the architecture we’ve defined, rather than trying to adapt the architecture to fit a particular tool.
   
By doing this, I believe we can build a platform that not only meets our current needs but also stands the test of time, ensuring flexibility and longevity.

I’m confident that with this mindset, we can build a platform that remains adaptable, sustainable, and resilient to future changes. I look forward to continuing our collaboration and hearing your thoughts on this approach.

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
