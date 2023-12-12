// src/index.ts
import * as express from "express";


const app = express();
const port = 3000; // default port to listen
app.use (express.json());
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello World!' })
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});