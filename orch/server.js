// server.js
const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configure CORS to allow requests from your orchestrator's origin
  server.use(cors({
    origin: 'http://localhost:3001', // Replace with your orchestrator's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Optional: Allow cookies and other credentials
  }));

  // Default request handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server on port 3000
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
