import axios from 'axios';
import { mkConfig, generateCsv, asString } from "export-to-csv";
import { writeFile } from "node:fs";
import { Buffer } from 'node:buffer';
import type { Product } from './product_model.ts';

async function fetchProducts() {
    try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products');
        const productList = response.data.map((product: Product) => ({
            ...product,
            image_urls: Array.isArray(product.image_urls) 
                ? product.image_urls.join("|") 
                : product.image_urls
        }));

        await convertDataToCsv(productList);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching data:', error.message);
        } else {
            console.error('An unknown error occurred');
        }
    }
}

async function convertDataToCsv(productList: Product[]) {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(productList as Record<string, any>[]);
    const filename = `products.csv`;
    const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

    writeFile(filename, csvBuffer, (err) => {
        if (err) throw err;
        console.log("file saved: ", filename);
    });
}

fetchProducts();