class AppComplexComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Initialize internal state
    this.items = [];
  }

  async init(props = {}) {
    // Set default properties if not provided
    this.items = props.items || [];
    // Render the component's internal HTML
    this.render();
    // Return the root element (shadow root's host)
    return this;
  }

  close() {
    // Clean up any resources or event listeners
    this.shadowRoot.querySelector('#item-list').innerHTML = '';
  }

  addItem(item) {
    if (item) {
      this.items.push(item);
      this.render();
    }
  }

  clearItems() {
    this.items = [];
    this.render();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const input = this.shadowRoot.querySelector('#item-input');
    const item = input.value.trim();
    if (item) {
      this.addItem(item);
      input.value = '';
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        #container {
          padding: 10px;
          border-radius: 4px;
          background: #fff;
        }
        #item-list {
          margin-top: 10px;
        }
        .item {
          background: #f9f9f9;
          border: 1px solid #eee;
          padding: 5px;
          border-radius: 4px;
          margin-bottom: 5px;
        }
        #item-count {
          font-weight: bold;
        }
        form {
          margin-bottom: 10px;
        }
        input {
          padding: 5px;
          margin-right: 5px;
        }
        button {
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
      <div id="container">
        <h2>Item List <span id="item-count">(${this.items.length})</span></h2>
        <form id="item-form">
          <input type="text" id="item-input" placeholder="Enter item" />
          <button type="submit">Add Item</button>
        </form>
        <button id="clear-btn">Clear List</button>
        <div id="item-list">
          ${this.items.map(item => `<div class="item">${item}</div>`).join('')}
        </div>
      </div>
    `;

    // Attach event listeners
    this.shadowRoot.querySelector('#item-form').addEventListener('submit', (event) => this.handleFormSubmit(event));
    this.shadowRoot.querySelector('#clear-btn').addEventListener('click', () => this.clearItems());
  }
}

customElements.define('app-complex-component', AppComplexComponent);
