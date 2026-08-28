
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../../types/Product";
import ProductCard from "./ProductCard";
import SortFilter from "./filter/SortFilter";


type ProductsGridProps={
    products: Product[];
    setSort: Dispatch<SetStateAction<string>>;
    sort: string;
}


function ProductsGrid({products, setSort, sort}: ProductsGridProps) {

    return(
        <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-1xl md:text-2xl w-full">New Releases</h2>
                <span className="hidden md:block"><SortFilter sort={sort} setSort={setSort}/></span>
                
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-5 pt-6">
                {
                    products.length ? products.map(product =>(
                        <ProductCard product={product} key={product.id}/>
                    )) : <h1 className="text-2xl font-light text-[#6B7280]">Products not found</h1>
                }
                
            </div>
        </div>
    )
}

export default ProductsGrid;