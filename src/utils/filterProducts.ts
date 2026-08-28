
import type { ProductFilter } from "../types/Filter";
import type { Product } from "../types/Product";




export function filterProducts(filter: ProductFilter, products: Product[], search:string) {
    return products.filter((product) =>{
        return (filter.category === "All" || filter.category === product.category) 
        && (filter.brand === "" || filter.brand === product.brand) 
        && (filter.priceFrom <= product.price && filter.priceTo >=product.price)
        && (filter.inStock === false || filter.inStock === product.stock)
        && (product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()))
        && (filter.rating === 0 || Math.round(product.grade) === filter.rating)

    })
}