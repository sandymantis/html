// pages/ssr.js
import { useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from the Dog Facts API on the server side
  const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
  const data = await res.json();

  // Select a random fact from the data
  const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];

  return {
    props: {
      initialFact: randomFact, // Pass the random fact as a prop to the page
    },
  };
}

export default function SSRPage({ initialFact }) {
  // State to hold the current dog fact
  const [fact, setFact] = useState(initialFact);

  // Function to fetch a new random dog fact
  const fetchNewFact = async () => {
    const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
    const data = await res.json();
    const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];
    setFact(randomFact); // Update the state with the new fact
  };

  return (
    <div>
      <h1>Server-Side Rendered Dog Fact</h1>
      <p>{fact}</p>
      <button onClick={fetchNewFact}>Get Another Dog Fact</button>
    </div>
  );
}

The RateLift application is used to manage the lifecycle of the ChartChase dataset with respect to vendor management. The process involves the following steps:

The ChartChase dataset is obtained from the engine vendor.
This dataset is distributed across three vendors based on specific rules and characteristics.
These vendors independently perform the ChartChase, gather additional evidence, and then update the status back to the RateLift application. However, the actual evidence is not sent back to RateLift; it is forwarded to the engine and potentially to a pseudo claims system.
The engine then incorporates this evidence into the calculations for the measure.
The current scope of the application covers approximately 100,000 individuals, and its primary function is managing vendor relationships and statuses. No abstraction of the dataset itself is performed within RateLift.

Potential Opportunities for Improvement:
Cost Optimization: The current cost of $5 million seems excessive given the application's scope. Simplification of the process could result in significant cost savings.

Technical Stack Alignment: The technology stack used for RateLift is inconsistent with the rest of the tech stack in ECDP, presenting an opportunity to align and streamline the overall technology approach.

Improved Data Flow for Evidence: Currently, vendors do not send the collected evidence back to the RateLift application; instead, it is sent directly to the engine. This creates two key issues:

Internal Awareness: There is no internal visibility of what evidence was submitted by the vendors.
Reporting Requirements: There may be a need for reporting on the additional evidence collected.
To address these, a potential improvement would be to have the vendors submit the evidence back to the RateLift application first, allowing better internal tracking and reporting before forwarding the data to the engine.

Opportunity Overview: GIC API

The GIC API currently works by interfacing with the GIC database and Cosmos DB. The data flow includes:

Engine I sends all prospective G's, outputs, and measures to the GIC database.
From the GIC database, only prospective data for two LOBs is sent to the GIC API store on Cosmos DB.
MR LOB data is sent from a separate Snowflake instance to the GIC store (Cosmos DB), from where the API is built.
The focus of the GIC API appears to be primarily on the Pro data, which is what enters Cosmos DB.
Potential Opportunities for Improvement:
API Standardization:

The current API is custom-built for internal use cases and does not follow standard industry schemas like GAPS in Keras.
A potential opportunity exists to transform this API into a standardized GAPS-compliant API that can be used both internally and externally by other teams.
Standardizing the API could expand its scope, allowing GAPS data from multiple areas (not just engines) to be incorporated, making it a more robust enterprise API.
Read-Write Capabilities:

The existing API is read-only. Another opportunity could involve converting it to a read-write API to enable more comprehensive interactions with the data.
This transition would require an analysis of the necessary capabilities and potential integration with other GAPS sources.
Cost Optimization:

The cost of maintaining the API store at $2 million seems high for a single API.
There is a potential opportunity to evaluate the costs and explore optimizations, particularly around infrastructure and API management.
Use of Standard Individual Identifiers:

Introducing the use of standard individual identifiers (such as a master ID) could allow retrieving all GAPS associated with a particular member.
By applying the appropriate filters, this feature could streamline data retrieval and improve the API's utility for both internal and external use cases.

Opportunity Overview: GIC API

The GIC API currently works by interfacing with the GIC database and Cosmos DB. The data flow includes:

Engine I sends all prospective G's, outputs, and measures to the GIC database.
From the GIC database, only prospective data for two LOBs is sent to the GIC API store on Cosmos DB.
MR LOB data is sent from a separate Snowflake instance to

Opportunity Overview: Use of Two Engines

Currently, two separate engines are being used, each with different input and output structures. The process involves:

Dataset Preparation: The dataset needs to be prepared differently for each engine, which increases complexity and requires additional effort from the development team.
Increased Coding and Investment: Supporting two engines leads to higher coding demands and investment costs, both in terms of resources and time.
Potential Opportunity:
Consolidation of Engines: A potential opportunity exists to explore the possibility of combining the two engines into one. This consolidation could simplify processes, reduce the need for separate dataset preparation, and ultimately lower the development and operational costs.
Decision Ownership: While it’s unclear whether the technical team is responsible for the decision to use two engines, this area warrants further investigation to determine whether simplification is possible.

  Opportunity Overview: Database Layer in the Data Flow

The current data flow involves multiple databases, primarily using Snowflake, and includes a quality database acting as an abstraction layer optimized for consumption by six different programs feeding data to two engines. The structure is as follows:

Source Databases: Mostly Snowflake, with some non-Snowflake datasets as sources.
Quality Database:
Acts as an intermediate layer where data is denormalized for optimized consumption by the six programs.
The quality database is also on Snowflake and is internally used to ensure that the six programs can extract and prepare data efficiently for the two engines.
Without the quality database, the six programs would have to access and extract data directly from the source databases, which would be more expensive and less efficient.
Key Benefits of the Quality Database:
Optimized Structure:
The quality database is optimized to facilitate the extraction of data by the six programs, improving performance and reducing complexity.
Time Travel Capabilities:
The quality database, built on Snowflake, provides a time travel feature that allows tracking previously updated or deleted records, effectively acting as an audit trail.
Potential Opportunities for Improvement:
Eliminating Redundant Copies:
Each of the six programs currently pulls a subset of data from the quality database and stores it internally within its own Snowflake data store. There is a potential opportunity to eliminate this third layer of data storage.
Instead of making physical copies, the programs could dynamically extract the data from the quality database using logical views. This could reduce redundancy without compromising performance.
Incremental Improvement:
While there is potential to eliminate the additional copies of data, it is not recommended to make this change immediately.
The architecture can proceed as-is, and an incremental approach can be considered later. This would involve analyzing the trade-offs and ensuring that the value provided by the current setup is not lost before deciding whether to implement the change.

  Overall Scope and Goal of the Process

The primary objective of this process is to assess how effectively care is being managed for a target population. This is done by tracking various measures, which are tied to the population’s eligibility and associated plans. The process involves the following key steps:

Data Collection:
Eligibility and Measures: Identify the eligible population and determine the measures applicable to them.
Demographic Data: Capture member demographic information.
Medical Claims: Include claims for medical, vision, dental, and behavioral health.
Pharmacy Claims: Assess medication adherence and related factors.
Supplemental Clinical Data: Incorporate additional clinical data for evidence gathering.
Provider Data: Use provider attribution data to map members to their care providers.
Evidence and Measure Calculation:
Intermediate Quality Database: Data from various sources is stored in a quality database, optimized for extraction and further processing.
Engines: These engines process the data to calculate whether measures are met or unmet, often using numerator/denominator analysis. The output is stored in the Gaps in Care database.
Processing Phases:
Prospective Processing: Proactively assess current eligible populations and identify gaps in care. This allows for targeted follow-ups to close gaps before the end of the year.
Retro-Processing: Analyze performance after the fact to determine how well care was managed over the past year. This is used to calculate overall ratings and reflect care effectiveness.
Hybrid Measures:
For certain measures (hybrid), additional data beyond administrative claims is required. This could involve medical chart chasing via RateLift, where vendors gather additional evidence, which is sent back to the engines for recalculating measures.
Output and Consumption:
Gaps in Care Database: The final output of measure calculations is stored in this database.
Gaps in Care API: This API exposes the data for consumption by other applications.
Reporting and Analytics: External teams access these databases for report generation and analytics, which are used to assess and improve performance.

  Opportunity Overview: Transition from Batch-Oriented to Event-Oriented Processing

The current process for the six programs involves repeated batch-oriented operations, where data is extracted, transformed, sent to the engine, and processed multiple times per month. This process can occur daily, weekly, or bi-weekly and leads to:

Large volumes of data constantly being extracted, processed, and recalculated.
Ongoing updates to measures, leading to inefficiencies and potential wastage of resources.
Potential Opportunity:
Event-Oriented Processing: Instead of the current batch process, there’s a potential opportunity to move towards an event-driven approach. Key benefits of this transition could include:
Real-time updates based on events of interest across different domains.
Dynamic updates to measure parameters like numerator, denominator, and applicability as events occur, reducing the need for repeated batch runs.
Simplification of the entire process, leading to more efficient use of resources.
Challenges:
The external engine that processes the data may not currently support event-driven calculations. Transitioning to this model would require a close partnership with the engine provider to explore if such an approach is feasible.
Long-Term Consideration:
While immediate changes may not be possible, this recommendation should be explored as a long-term opportunity to optimize processing.

// pages/ssr.js
import { useState } from 'react';

export async function getServerSideProps() {
  // Fetch data from the Dog Facts API on the server side
  const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
  const data = await res.json();

  // Select a random fact from the data
  const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];

  return {
    props: {
      initialFact: randomFact, // Pass the random fact as a prop to the page
    },
  };
}

export default function SSRPage({ initialFact }) {
  // State to hold the current dog fact
  const [fact, setFact] = useState(initialFact);

  // Function to fetch a new random dog fact
  const fetchNewFact = async () => {
    const res = await fetch('https://dog-api.kinduff.com/api/facts?number=4');
    const data = await res.json();
    const randomFact = data.facts[Math.floor(Math.random() * data.facts.length)];
    setFact(randomFact); // Update the state with the new fact
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🐶 Dog Fact of the Moment</h1>
      <ul style={styles.factList}>
        <li style={styles.factItem}>{fact}</li>
      </ul>
      <button style={styles.button} onClick={fetchNewFact}>
        Get Another Dog Fact
      </button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  factList: {
    listStyleType: 'none',
    padding: 0,
  },
  factItem: {
    background: '#f9f9f9',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
  },
};
