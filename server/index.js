const express = require('express');
const cors = require('cors');
const { runPlaywrightTest } = require('./playwright/testRunner');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/run-test', async (req, res) => {
  try {
    const result = await runPlaywrightTest();
    res.status(200).json({ success: true, result });
  } catch (err) {
    console.error('Error running test:', err);
    res.status(500).json({ success: false, error: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
