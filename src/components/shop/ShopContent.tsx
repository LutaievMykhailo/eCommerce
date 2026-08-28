
import type { Product } from "../../types/Product";
import ProductsGrid from "./ProductsGrid";
import type { ProductFilter } from "../../types/Filter";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Filter from "./filter/Filter";
import { Funnel } from "lucide-react";
import SortFilter from "./filter/SortFilter";

type ShopContentProps = {
    sortedProducts: Product[];
    filter: ProductFilter;
    setFilter: Dispatch<SetStateAction<ProductFilter>>;
    setSort: Dispatch<SetStateAction<string>>
    sort: string
}

function ShopContent({sortedProducts, filter, setFilter, setSort, sort}: ShopContentProps) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {document.body.style.overflow = ""}
    }, [isOpen])
    return(
        <section>
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black opacity-50 top-0 left-0 right-0 z-2 h-full fixed`} onClick={()=>setIsOpen(false)}>
            </div>
            <div className="md:hidden flex items-center  justify-between p-3">
                <div className="flex items-center relative">
                    <Funnel className="absolute left-2"/>
                    <button onClick={()=>setIsOpen(true)} className="pr-3 pl-9 py-2 border border-[#E5E7EB] rounded-lg text-[#111827] font-semibold">Filters</button>
                </div>
                <div>
                    <SortFilter sort={sort} setSort={setSort}/>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 py-16">
                <Filter filter={filter} setFilter={setFilter} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <ProductsGrid products={sortedProducts} setSort={setSort} sort={sort}/>
            </div>
            
        </section>
    )
}


export default ShopContent;