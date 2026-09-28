import express from 'express';
import bodyParser from 'body-parser';
import explain from '../api/explain.js';

const app = express();
app.use(bodyParser.json());

app.post('/api/explain', async (req, res) => {
  // adapt the Vercel handler signature
  await explain(req, res);
});

app.listen(5175, () => console.log('Dev API listening on http://localhost:5175'));
