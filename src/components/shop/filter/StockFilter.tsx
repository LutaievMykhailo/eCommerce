import type { Dispatch, SetStateAction } from "react";
import type { ProductFilter } from "../../../types/Filter";


type StockFilterProps ={
    setFilter: Dispatch<SetStateAction<ProductFilter>>
}

function StockFilter({setFilter}: StockFilterProps) {
    return(
        <div>
            <h3 className="font-bold text-base">In Stock</h3>
            <div className="flex items-center mt-3">
                <input className="mr-2 border-[#E5E7EB]" type="checkbox" onChange={e=>setFilter(prev=>({...prev, inStock: e.target.checked}))} name="" id="" />
                <p className="text-sm">In stock</p>

            </div>
        </div>
        
    )
}

export default StockFilter;