import type { Product } from "../types/Product"


export function sortProducts(filteredProducts: Product[], sort : string) {
    return [...filteredProducts].sort((a, b) =>{
        switch (sort) {
            case "price_asc":
                return a.price - b.price
            case "price_desc":
                return b.price - a.price
            case "rating":
                return b.grade - a.grade
            default: return 0
        }
    })
}