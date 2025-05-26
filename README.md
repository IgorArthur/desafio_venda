## About

This repository is a POC (Proof of Concept) that simulates the integration between
two systems:

 - An API of an ERP (Enterprise Resource Planning) that provides a product dataset;
 - A BFF (Backend for Frontend) that accesses the API and parses the dataset.

## Instalation

1. Clone the Repository:
```bash
git clone https://github.com/IgorArthur/desafio_venda.git
cd desafio_venda
```

2. Open ProductApi:
```bash
cd product_api
```

2.1. Install the dependencies for ProductApi:
```bash
npm install
npm run build
```

2.2. Run ProductAApi
```bash
npm start
```
Expected output: 
 - Server is running on http://localhost:3000

3. Open BFF on a new terminal
```bash
cd desafio_venda
cd bff
```

3.1. Install the dependencies for ProductApi:
```bash
npm install
```

3.2. Run BFF:
```bash
node getProduct.ts --user=admin --pass=admin123
```
Expected output: 
   - Fetched page 1 of 3
   - Fetched page 2 of 3
   - Fetched page 3 of 3

   - File saved:
 products.csv

A file called products.csv should be created inside desafio_venda/bff
