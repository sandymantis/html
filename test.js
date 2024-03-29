class MyMessageElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create a template
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .message-box {
                    border: 2px solid red;
                    padding: 10px;
                    margin: 10px 0;
                    background-color: lightblue;
                    border-radius: 8px;
                    font-family: Arial, sans-serif;
                }
            </style>
            <div class="message-box">
                <slot></slot> <!-- Slot for light DOM content -->
            </div>
        `;

        // Append the template content to the shadow DOM
        this.shadowRoot.innerHTML = `<button id="myButton">Click Me</button>`;

        this.shadowRoot.querySelector('#myButton').addEventListener('click', () => {
           var i = globalFunction(); // Call the global function
           console.log(i);
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        document.addEventListener('themeChange', (event) => {
            this.setTheme(event.detail);
            console.log("updating theme inside the shadow dom");
        });
    }

    setTheme(theme) {
        this.setAttribute('theme', theme);
    }

    connectedCallback() {
        if (this.hasAttribute('message')) {
            this.shadowRoot.querySelector('.message-box').textContent = this.getAttribute('message');
        }
    }
}
