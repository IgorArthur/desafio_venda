## About

This repository is a POC (Proof of Concept) that simulates the integration between
two systems:

 - An API of an ERP (Enterprise Resource Planning) that provides a product dataset;
 - A BFF (Backend for Frontend) that accesses the API and parses the dataset.

## Instalation

1. Clone the Repository:
```bash
git clone <repository-url>
cd desafio_venda
```

2. Install the dependencies:
```bash
npm install
```

3. Run the ProductApi:
```bash
cd product_api
npm run build
npm start
```
Expected output: 
 - Server is running on http://localhost:3000

4.1. Open a new terminal

4.2. Run BFF:
```bash
cd bff
node getProduct.ts --user=admin --pass=admin123
```
Expected output: 
   - Fetched page 1 of 3
   - Fetched page 2 of 3
   - Fetched page 3 of 3

   - File saved:
 products.csv
