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
        image_urls: ["https://example.com/image1.jpg", "https://example.com/image1_alt.jpg"],
        link: "https://example.com/product1",
        size: "P",
        color: "Preto",
        stock: 10
    },
    {
        id: "2",
        title: "Camiseta Básica",
        description: "Camiseta em algodão de alta qualidade",
        price: 79.9,
        external_id: "SKU123",
        main_image: "https://example.com/image1.jpg",
        image_urls: ["https://example.com/image1.jpg", "https://example.com/image1_alt.jpg"],
        link: "https://example.com/product1",
        size: "M",
        color: "Preto",
        stock: 15
    }
]; 