import axios from 'axios';
import { mkConfig, generateCsv, asString } from "export-to-csv";
import { writeFile } from "node:fs";
import { Buffer } from 'node:buffer';
import type { Product } from './productModel.ts';
import type { ResponseData } from './responseDataModel.ts';
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

    const response = await axios.get('http://localhost:3000/api/products', {
        auth: { username: argv.user, password: argv.pass },
        validateStatus: () => true,
    });

    if (response.status !== 200) { console.log("\nAn error ocurred:\n", response.data.error); return; }

    const productList = response.data.productList.map((product: Product) => ({
        ...product,
        image_urls: Array.isArray(product.image_urls)
            ? product.image_urls.join("|")
            : product.image_urls,
    }));

    await convertDataToCsv(productList);


}

async function convertDataToCsv(productList: Product[]) {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(productList as Record<string, any>[]);
    const filename = `products.csv`;
    const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

    writeFile(filename, csvBuffer, (err) => {
        if (err) console.log("\nAn error ocurred:\n", err);
        console.log("\nFile saved:\n", filename);
    });
}

fetchProducts();