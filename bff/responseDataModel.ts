import { Product } from './productModel.js';

export interface PaginationInfo {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
}

export interface ResponseData {
    productList: Product[];
    pagination: PaginationInfo;
    error?: string;
} 