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
