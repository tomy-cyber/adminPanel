// backend/server.js

const express = require('express');
const cors = require('cors');
const { verifyToken } = require('./utils/auth'); // Import verifyToken middleware
const app = express();

// CORS setup
app.use(cors({
  origin: ['https://f-frontend-rho.vercel.app', 'http://localhost:3002'],
  credentials: true, 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser for JSON
app.use(express.json());

// Your routes
app.use(require('./routes'));  // Use the routes where you defined update-numbers and other APIs

// Start the server
app.listen(3001, () => {
  console.log("Backend running on https://f-backend-l4sd.vercel.app/");
});
