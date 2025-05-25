import express from 'express';
import { productList } from './product_list.js';
import { authMiddleware } from './auth.js';
const app = express();
const port = 3000;
app.get('/api/products', authMiddleware, (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, productList.length);
    const totalPages = Math.ceil(productList.length / pageSize);
    const paginatedProducts = productList.slice(startIndex, endIndex);
    res.json({
        productList: paginatedProducts,
        pagination: {
            currentPage: page,
            pageSize,
            totalPages,
            totalItems: productList.length
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
