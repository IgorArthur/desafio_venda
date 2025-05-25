export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    external_id: string;
    main_image: string;
    image_urls: string[];
    link: string;
    size: string;
    color: string;
    stock: number;
}

export const productList: Product[] = [
    {
        id: "1",
        title: "Camiseta Básica",
        description: "Camiseta em algodão de alta qualidade",
        price: 79.9,
        external_id: "SKU123",
        main_image: "https://example.com/image1.jpg",
        image_urls: ["https://example.com/image2.jpg", "https://example.com/image3.jpg"],
        link: "https://example.com/product1",
        size: "P",
        color: "Preto",
        stock: 10,
    },
    {
        id: "2",
        title: "Camiseta Básica",
        description: "Camiseta em algodão de alta qualidade",
        price: 79.9,
        external_id: "SKU123",
        main_image: "https://example.com/image1.jpg",
        image_urls: ["https://example.com/image2.jpg", "https://example.com/image3.jpg"],
        link: "https://example.com/product1",
        size: "M",
        color: "Preto",
        stock: 15,
    },
    {
        id: "3",
        title: "Camiseta Básica",
        description: "Camiseta em algodão de alta qualidade",
        price: 79.9,
        external_id: "SKU123",
        main_image: "https://example.com/image1.jpg",
        image_urls: ["https://example.com/image2.jpg", "https://example.com/image3.jpg"],
        link: "https://example.com/product1",
        size: "G",
        color: "Preto",
        stock: 8,
    },
    {
        id: "4",
        title: "Tênis Esportivo",
        description: "Tênis esportivo ideal para corridas",
        price: 199.9,
        external_id: "SKU456",
        main_image: "https://example.com/image4.jpg",
        image_urls: [],
        link: "https://example.com/product2",
        size: "38",
        color: "Branco",
        stock: 5,
    },
    {
        id: "5",
        title: "Tênis Esportivo",
        description: "Tênis esportivo ideal para corridas",
        price: 199.9,
        external_id: "SKU456",
        main_image: "https://example.com/image4.jpg",
        image_urls: [],
        link: "https://example.com/product2",
        size: "39",
        color: "Branco",
        stock: 7,
    },
    {
        id: "6",
        title: "Tênis Esportivo",
        description: "Tênis esportivo ideal para corridas",
        price: 199.9,
        external_id: "SKU456",
        main_image: "https://example.com/image4.jpg",
        image_urls: [],
        link: "https://example.com/product2",
        size: "40",
        color: "Branco",
        stock: 3,
    },
]; 