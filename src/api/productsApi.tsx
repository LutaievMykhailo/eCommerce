
import type { Product } from "../types/Product";


const API_URL = "https://6a8887177b483fa21fe91640.mockapi.io/api/products"
export async function getProducts() : Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const response = await fetch(`${API_URL}`);
    if(!response.ok){
        throw new Error("Failed to fetch products")
    }
    const data = await response.json();
    return data
}
export async function getProductById(products: Product[] ,id: number) : Promise<Product> {
    
    
    const product = products.find(item => item.id === id)
    if(!product){
        throw new Error("Failed to fetch product")
    }
    return product

}