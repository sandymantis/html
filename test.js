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

For a **data modeling team** responsible for creating schemas for transactional databases, analytical databases, NoSQL databases, APIs, and business events, the roles and responsibilities focus on designing **logical, physical, and conceptual models** that support various data requirements while ensuring consistency, scalability, and alignment with organizational goals. Here's a succinct summary:

---

### **Key Roles and Responsibilities of a Data Modeling Team**

#### **1. Conceptual, Logical, and Physical Modeling**
   - **Conceptual Models:**
     - Collaborate with stakeholders to define high-level data requirements and relationships.
     - Focus on understanding the business domain and aligning models with organizational objectives.
   - **Logical Models:**
     - Design normalized schemas (e.g., 3NF) for transactional databases to ensure data consistency and integrity.
     - Create denormalized or star schemas for analytical databases to optimize query performance.
   - **Physical Models:**
     - Translate logical models into physical database schemas optimized for specific platforms (e.g., relational databases, NoSQL databases, or data warehouses).
     - Define indexes, partitions, constraints, and storage mechanisms.

#### **2. Database-Specific Schema Design**
   - **Transactional Databases (OLTP):**
     - Create schemas to support high-volume, real-time operations with normalized structures.
     - Ensure ACID compliance and referential integrity.
   - **Analytical Databases (OLAP):**
     - Design dimensional models (e.g., star and snowflake schemas) for reporting and analytics.
     - Optimize for query performance, data aggregation, and scalability.
   - **NoSQL Databases:**
     - Model data for key-value stores, document databases, or graph databases to support specific use cases.
     - Focus on flexibility and performance over strict normalization.

#### **3. API and Event Schema Design**
   - **API Schemas:**
     - Define message schemas for REST or GraphQL APIs, ensuring they align with data standards and consumer requirements.
     - Use tools like OpenAPI or GraphQL SDL to document and version schemas.
   - **Business Event Schemas:**
     - Design schemas for event-driven architectures, focusing on consistency, versioning, and compatibility.
     - Ensure events are self-contained, with clear definitions of data structure and metadata.

#### **4. Ensuring Data Consistency and Quality**
   - Define and enforce data standards, naming conventions, and validation rules across all models.
   - Collaborate with governance teams to ensure models align with data quality and compliance requirements.
   - Conduct regular reviews to ensure consistency across schemas and domains.

#### **5. Performance Optimization**
   - Optimize schema designs for performance, including indexing, sharding, and partitioning strategies.
   - Address trade-offs between normalization and denormalization based on workload requirements.

#### **6. Collaboration with Stakeholders**
   - Work closely with:
     - **Business Teams** to capture requirements and ensure models reflect business rules and processes.
     - **Development Teams** to integrate schemas into applications and APIs.
     - **Data Engineers** to align data models with ETL/ELT pipelines and storage solutions.
     - **Architects** to ensure models align with overall data architecture.

#### **7. Documentation and Versioning**
   - Maintain comprehensive documentation of schemas, including entity definitions, relationships, and data flows.
   - Use tools like ERwin, Lucidchart, or dbt to create and manage data models.
   - Implement version control for models and schemas to track changes and support collaborative development.

#### **8. Cross-System Data Integration**
   - Design schemas that support integration across systems (e.g., data lakes, warehouses, and transactional systems).
   - Develop mappings and transformation logic to harmonize data across heterogeneous environments.

#### **9. Future-Proofing Models**
   - Anticipate evolving requirements and design schemas that support scalability, extensibility, and adaptability.
   - Evaluate and implement emerging standards or practices for schema design (e.g., JSON schema for NoSQL or event schemas).

#### **10. Governance and Compliance Alignment**
   - Ensure models adhere to organizational governance policies and compliance regulations (e.g., GDPR, HIPAA).
   - Define access controls and security measures at the schema level to protect sensitive data.

---

### **Distinct Deliverables**
- **Database Schemas:** Logical and physical designs for OLTP, OLAP, and NoSQL systems.
- **API Schemas:** OpenAPI specifications, GraphQL SDLs, or JSON schemas.
- **Event Schemas:** Self-descriptive, versioned schemas for business events in formats like Avro, Protobuf, or JSON.

---

### **Summary of Impact**
This team acts as the backbone of an organization's data infrastructure by ensuring that **data at rest** (databases) and **data in motion** (APIs and events) are well-structured, consistent, and performant. Their work enables efficient operations, analytics, and system integrations while ensuring compliance and scalability.    connectedCallback() {
        if (this.hasAttribute('message')) {
            this.shadowRoot.querySelector('.message-box').textContent = this.getAttribute('message');
        }
    }
}
