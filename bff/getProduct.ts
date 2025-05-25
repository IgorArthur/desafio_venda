import axios from 'axios';
import { mkConfig, generateCsv, asString } from "export-to-csv";
import { writeFile } from "node:fs";
import { Buffer } from 'node:buffer';
import type { Product } from '../models/productModel.js';
import type { ResponseData } from '../models/responseDataModel.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .option('user', {
        type: 'string',
        description: 'Username for API authentication',
        demandOption: true,
    })
    .option('pass', {
        type: 'string',
        description: 'Password for API authentication',
        demandOption: true,
    })
    .argv;

async function fetchProducts() {
    let productList: Product[] = [];
    let currentPage = 1;
    let totalPages = Number.MAX_SAFE_INTEGER;

    while (currentPage <= totalPages) {
        const response = await axios.get<ResponseData>('http://localhost:3000/api/products', {
            auth: { username: argv.user, password: argv.pass },
            validateStatus: () => true,
            params: {
                page: currentPage,
                pageSize: 2
            }
        });

        if (response.status !== 200) { 
            console.log("\nAn error occurred:\n", response.data.error); 
            return; 
        }

        const { productList: currentPageProducts, pagination } = response.data;
        totalPages = pagination.totalPages;

        const parsedProducts = currentPageProducts.map((product: Product) => ({
            ...product,
            image_urls: Array.isArray(product.image_urls)
                ? product.image_urls.join("|")
                : product.image_urls,
        }));

        productList = [...productList, ...parsedProducts];
        console.log(`Fetched page ${currentPage} of ${totalPages}`);
        currentPage++;
    }

    await convertDataToCsv(productList);
}

async function convertDataToCsv(productList: Product[]) {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(productList as Record<string, any>[]);
    const filename = `products.csv`;
    const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

    writeFile(filename, csvBuffer, (err) => {
        if (err) console.log("\nAn error occurred:\n", err);
        console.log("\nFile saved:\n", filename);
    });
}

fetchProducts();