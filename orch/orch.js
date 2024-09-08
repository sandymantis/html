class MicroFrontendOrchestrator {
  constructor() {
    this.currentApp = null;
    this.routeMap = {};
    this.initRouter();
  }

  // Initialize the router by listening to URL changes
  initRouter() {
    window.addEventListener('popstate', () => this.handleRouteChange());
    this.handleRouteChange(); // Initial route handling
  }

  // Register a route with its corresponding app
  registerRoute(path, appName) {
    this.routeMap[path] = appName;
  }

  // Handle the route change
  async handleRouteChange() {
    const path = window.location.pathname;
    const appName = this.routeMap[path];

    if (!appName) {
      console.error(`No app registered for path: ${path}`);
      return;
    }

    if (this.currentApp) {
      // Call the close function of the current app
      await this.currentApp.close();
      this.clearContent();
    }

    try {
      // Dynamically import the app's JavaScript
      const appModule = await import(`./apps/${appName}.js`);
      this.currentApp = appModule;
      
      // Call the init function and get the markup
      const markup = await this.currentApp.init();

      // Insert the markup into the <app-content> node
      this.renderContent(markup);
    } catch (error) {
      console.error(`Error loading app: ${appName}`, error);
    }
  }

  // Clear the existing content in the <app-content> node
  clearContent() {
    const appContentNode = document.querySelector('app-content');
    if (appContentNode) {
      appContentNode.innerHTML = '';
    }
  }

  // Render the new content in the <app-content> node
  renderContent(markup) {
    const appContentNode = document.querySelector('app-content');
    if (appContentNode) {
      appContentNode.innerHTML = markup;
    }
  }
}

// Example usage:
// Assume that you have two microfrontends: `App1` and `App2` with their respective init and close functions defined in `./apps/App1.js` and `./apps/App2.js`.

const orchestrator = new MicroFrontendOrchestrator();
orchestrator.registerRoute('/app1', 'App1');
orchestrator.registerRoute('/app2', 'App2');

// Simulate route changes (This would be handled by your router in a real app)
window.history.pushState({}, '', '/app1');
orchestrator.handleRouteChange();

window.history.pushState({}, '', '/app2');
orchestrator.handleRouteChange();



/////



export class MicroFrontendOrchestrator {
    constructor() {
        this.currentApp = null;
        this.routeMap = {};
        this.initRouter();
        this.addGlobalLinkListener();
    }

    // Initialize the router by listening to URL changes
    initRouter() {
        window.addEventListener('popstate', () => this.handleRouteChange());
        this.handleRouteChange(); // Initial route handling
    }

    // Register a route with its corresponding app
    registerRoute(path, appName) {
        this.routeMap[path] = appName;
    }

    // Handle the route change
    async handleRouteChange() {
        const path = window.location.pathname;
        const appName = this.routeMap[path];

        if (!appName) {
            console.error(`No app registered for path: ${path}`);
            return;
        }

        if (this.currentApp) {
            // Call the close function of the current app
            await this.currentApp.close();
            this.clearContent();
        }

        try {
            // Dynamically import the app's JavaScript
            const appModule = await import(`./apps/${appName}.js`);
            this.currentApp = appModule;
            
            // Call the init function and get the markup
            const markup = await this.currentApp.init();

            // Insert the markup into the <app-content> node
            this.renderContent(markup);
        } catch (error) {
            console.error(`Error loading app: ${appName}`, error);
        }
    }

    // Clear the existing content in the <app-content> node
    clearContent() {
        const appContentNode = document.querySelector('app-content');
        if (appContentNode) {
            appContentNode.innerHTML = '';
        }
    }

    // Render the new content in the <app-content> node
    renderContent(markup) {
        const appContentNode = document.querySelector('app-content');
        if (appContentNode) {
            appContentNode.innerHTML = markup;
        }
    }

    // Add a global listener for link clicks
    addGlobalLinkListener() {
        document.addEventListener('click', (event) => {
            const target = event.target;

            // Check if the clicked element is a link (<a>)
            if (target.tagName === 'A' && target.href) {
                event.preventDefault(); // Prevent the default navigation
                const path = new URL(target.href).pathname;

                // Push the new state and handle the route change
                window.history.pushState({}, '', path);
                this.handleRouteChange();
            }
        });
    }
}

