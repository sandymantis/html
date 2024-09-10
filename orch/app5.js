document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const component = document.createElement('my-web-component');
    appContainer.appendChild(component);

    // Initialize the component
    component.setAttribute('some-attribute', 'value');
