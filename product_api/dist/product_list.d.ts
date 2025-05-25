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
export declare const productList: Product[];
