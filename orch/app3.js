// App1.js

// Define a more complex Web Component for App 1
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
    title.textContent = this.getAttribute('title') || 'Default Title';

    const paragraph = document.createElement('p');
    paragraph.textContent = this.getAttribute('description') || 'This is the default description.';

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', () => this.handleClick());

    // Append content to the container
    container.appendChild(title);
    container.appendChild(paragraph);
    container.appendChild(button);

    // Add styles to the shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      #app1-container {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #333;
      }

      p {
        color: #666;
      }

      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }
    `;

    // Attach the container and styles to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  // Handle button click event
  handleClick() {
    console.log('Button clicked!');
    // Dispatch a custom event
    this.dispatchEvent(new CustomEvent('button-click', {
      detail: { message: 'Button was clicked in App 1' },
      bubbles: true,
      composed: true
    }));
  }
}

// Define the custom element for App 1
customElements.define('app-one-component', App1Component);

export async function init() {
  // Simulate loading or data fetching
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return the markup including the Web Component for App 1
  return `
    <app-one-component title="Welcome to App 1" description="This is a more complex Web Component."></app-one-component>
  `;
}

export async function close() {
  // Perform any necessary cleanup, e.g., remove event listeners, clear timers, etc.
  console.log('App 1 is being closed');
  // If needed, you could do additional cleanup here
}




// app1.js
import './card.js';  // Import the common card component

export class App1Component extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <card-component>
        <span slot="title">App 1 Title</span>
        <span slot="content">This is the content for App 1</span>
      </card-component>
    `;
  }
}

customElements.define('app1-component', App1Component);
