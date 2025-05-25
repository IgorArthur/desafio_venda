import express from 'express';
import { productList } from './product_list.js';
import { authMiddleware } from './auth.js';
const app = express();
const port = 3000;
app.get('/api/products', authMiddleware, (req, res) => {
    res.json({ productList });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
