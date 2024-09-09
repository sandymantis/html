// App1.js

export async function init() {
  // Simulate loading or data fetching
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return the markup specific to this microfrontend
  return `
    <div id="app1-container">
      <h1>Welcome to App 1</h1>
      <p>This is the content of App 1. Enjoy your stay!</p>
    </div>
  `;
}

export async function close() {
  // Perform any necessary cleanup, e.g., remove event listeners, clear timers, etc.
  console.log('App 1 is being closed');
  // If needed, you could do additional cleanup here
}




////



// App1.js

// Define a simple Web Component for App 1
class App1Component extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow DOM to the component
    const shadow = this.attachShadow({ mode: 'open' });

    // Create a container for the content
    const container = document.createElement('div');
    container.setAttribute('id', 'app1-container');

    // Add content to the container
    const title = document.createElement('h1');
    title.textContent = 'Welcome to App 1';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is the content of App 1. Enjoy your stay!';

    // Append content to the container
    container.appendChild(title);
    container.appendChild(paragraph);

    // Attach the container to the shadow DOM
    shadow.appendChild(container);
  }
}

// Define the custom element for App 1
customElements.define('app-one-component', App1Component);

export async function init() {
  // Simulate loading or data fetching
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return the markup including the Web Component for App 1
  return `
    <app-one-component></app-one-component>
  `;
}

export async function close() {
  // Perform any necessary cleanup, e.g., remove event listeners, clear timers, etc.
  console.log('App 1 is being closed');
  // If needed, you could do additional cleanup here
}
