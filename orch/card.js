// card.js
export class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      </style>
      <div class="card">
        <h2><slot name="title"></slot></h2>
        <p><slot name="content"></slot></p>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
