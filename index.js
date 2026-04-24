const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Store server start time when app starts
const serverStartTime = new Date();

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.json({
    message: 'Welcome to the Multi-Instance Deployment Test API!',
    served_by: hostname,
    serverStartTime: serverStartTime.toISOString(),
    timestamp: new Date().toISOString()
  });
});

app.get('/health-check', (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    served_by: os.hostname(),
    serverStartTime: serverStartTime.toISOString(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/data', (req, res) => {
  res.json({
    data: [
      { id: 1, name: 'Item Alpha' },
      { id: 2, name: 'Item Beta' },
      { id: 3, name: 'Item Gamma' }
    ],
    served_by: os.hostname()
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Container Hostname: ${os.hostname()}`);
});
