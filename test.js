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
Thank you for clarifying! In this context, the **data analysts themselves are expected to function as Data Subject Matter Experts (SMEs)**. This means they are not only responsible for the technical aspects of data management but also deeply embedded in the business and domain-level understanding of the data and systems. Here's how their role and responsibilities adapt to this expectation:

---

### **Leader Role: Head of Data Center of Excellence (Data Analysis & Data Modeling)**  

This role is responsible for uniting the **data analysis** and **data modeling** teams under a cohesive **Data Center of Excellence (CoE)**, driving innovation, defining strategic goals, and creating a high-performing, purpose-driven organization. The leader will guide both teams in advancing their respective disciplines, ensuring their work goes beyond day-to-day operations, while fostering collaboration, motivation, and alignment with broader organizational goals.

---

### **Key Responsibilities**

#### **1. Build and Lead the Data Center of Excellence**
   - Establish a unified Data CoE by integrating data analysis and data modeling teams under a single vision and strategy.
   - Create a shared purpose and framework that motivates the teams and enhances their collaboration while respecting their distinct disciplines.

#### **2. Define and Drive Strategy for Both Disciplines**
   - Develop and articulate clear strategies for the **data analysis** and **data modeling** groups, tailored to their unique goals and challenges.
   - Identify opportunities to advance each discipline through new methodologies, tools, and technologies, ensuring alignment with industry trends.

#### **3. Foster Innovation and Advancement**
   - Inspire teams to move beyond operational tasks by promoting experimentation, innovation, and the adoption of next-generation technologies (e.g., machine learning, AI-driven modeling, synthetic data generation).
   - Set goals for advancing each discipline, such as:
     - Enhancing data profiling, quality checks, and validation processes for data analysts.
     - Optimizing schema design, introducing modern data modeling practices, and exploring real-time or AI-driven modeling tools for data modelers.

#### **4. Create a High-Performing, Motivated Team**
   - Cultivate a culture of excellence by setting high standards, recognizing achievements, and providing professional development opportunities.
   - Define career growth paths and ensure team members are empowered to expand their skillsets and take ownership of strategic initiatives.

#### **5. Ensure Purposeful Execution of Work**
   - Align daily activities with strategic goals, ensuring that both teams deliver high-value outcomes while meeting organizational needs.
   - Provide clear guidelines and frameworks to ensure each team works efficiently, purposefully, and with measurable impact.

#### **6. Act as a Visionary and Innovator**
   - Anticipate future trends in data management and analysis to position the CoE at the forefront of the industry.
   - Identify and implement technologies, tools, and frameworks that enhance team capabilities and improve the organization’s overall data ecosystem.

#### **7. Promote Collaboration and Alignment**
   - Encourage cross-functional collaboration between data analysis and data modeling teams to maximize synergies.
   - Act as the bridge between these disciplines and other organizational stakeholders, ensuring alignment with business and technical objectives.

#### **8. Define Standards, Guidelines, and Best Practices**
   - Establish and enforce standards, frameworks, and best practices for data analysis and data modeling to ensure consistency, quality, and scalability.
   - Drive compliance with governance, security, and regulatory requirements across all team activities.

#### **9. Monitor Progress and Deliver Results**
   - Define and track key performance indicators (KPIs) to measure the teams' effectiveness, innovation, and progress toward strategic goals.
   - Ensure timely delivery of high-quality outputs from both teams, balancing day-to-day needs with long-term advancements.

---

### **Impact of the Role**
This leader will transform the combined data analysis and modeling teams into a unified, innovative **Data Center of Excellence**. By focusing on strategy, innovation, and team empowerment, they will not only elevate the capabilities of each discipline but also ensure their work drives meaningful advancements for the organization. This role ensures the teams are **future-ready**, high-performing, and consistently delivering beyond expectations.        if (this.hasAttribute('message')) {
            this.shadowRoot.querySelector('.message-box').textContent = this.getAttribute('message');
        }
    }
}
