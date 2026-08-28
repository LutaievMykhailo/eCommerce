import { useEffect, useState } from "react";
import ShopContent from "../components/shop/ShopContent";

import type { ProductFilter } from "../types/Filter";
import { filterProducts } from "../utils/filterProducts";

import { sortProducts } from "../utils/sortProducts";
import { useOutletContext } from "react-router-dom";
import { getProducts } from "../api/productsApi";
import type { Product } from "../types/Product";
import Loading from "../components/common/LoadingProducts";
import ErrorMessage from "../components/common/ErrorMessage";
import EmptyState from "../components/common/EmptyState";


type LayoutContext = {
    search: string;
}

function Shop() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const {search} = useOutletContext<LayoutContext>();
    const [sort, setSort] = useState("recommended")
    const [filter, setFilter] = useState<ProductFilter>({
            category: "All",
            brand: "",
            priceFrom: 0,
            priceTo: 99999,
            inStock: false,
            rating: 0
        });
        const loadProducts = async () =>{
                try{
                    setError("")
                    setLoading(true)
                    const data = await getProducts()
                    
                    setProducts(data)
                }
                catch(error){
                    setError("Failed to load products")
                }
                finally{
                    setLoading(false)
                }
                
            }
         useEffect(()=>{
            loadProducts()
        },[])
        
        const filteredProducts = filterProducts(filter, products, search)
        const sortedProducts = sortProducts(filteredProducts, sort)
        if(loading){
            return <Loading/>
        }
        if(error){
            return <ErrorMessage onRetry={loadProducts} message={error} />
        }
        if(products.length === 0)
        {
            return <EmptyState/>
        }
        
    return(
        <>
            <ShopContent sortedProducts={sortedProducts} filter={filter} setFilter={setFilter} setSort={setSort} sort={sort}/>
        </>
    )
}

export default Shop 