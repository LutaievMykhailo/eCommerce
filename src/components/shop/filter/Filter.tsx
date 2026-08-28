import { useState, type Dispatch, type SetStateAction, type TouchEvent } from "react";
import PriceFilter from "./PriceFilter";
import type { ProductFilter } from "../../../types/Filter";
import StockFilter from "./StockFilter";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";
import { CircleX } from "lucide-react";


type FilterProps = {
    filter: ProductFilter;
    setFilter: Dispatch<SetStateAction<ProductFilter>>;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

function Filter({filter, setFilter, isOpen, setIsOpen}: FilterProps) {
    
    const [dragY, setDragY] = useState(0);
    const [touchStartY, setTouchStartY] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const handleTouchStart = (e: TouchEvent<HTMLElement>)=>{
        setTouchStartY(e.touches[0].clientY)
  
    }
    const handleTouchMove = (e:TouchEvent<HTMLElement>)=>{
        const currentY = e.touches[0].clientY;
        const diff = currentY - touchStartY;

        setIsDragging(true)
        if (diff > 0) {
            setDragY(diff);
        }
        
    }
    const handleTouchEnd = ()=>{
        if (dragY > 100) {
        setIsOpen(false);
        }
        setIsDragging(false)

        setDragY(0);
    }
    
    return(
        <aside style={{transform: `translateY(${dragY}px)`}}
        
        className={`fixed ${isDragging ? "" : "transition-transform duration-300"} bottom-0 max-h-[90vh] overflow-y-auto rounded-t-2xl  -3xl left-0 right-0 bg-white z-3 md:static md:translate-y-0 ${isOpen ? "-translate-y-0" : "translate-y-full"} md:w-[20%] p-6 border border-[#E5E7EB]`}>
            <div
            onTouchStart={(e)=>handleTouchStart(e)}
            onTouchMove={(e)=>handleTouchMove(e)}
            onTouchEnd={handleTouchEnd} >
            <div
            className="mx-auto w-9 h-1 bg-[#E5E7EB]  md:hidden"></div>
            <div className="flex md:hidden justify-between items-center font-bold text-lg my-5">
                <h1>Filters</h1>
                <CircleX onClick={()=> setIsOpen(false)}/>
            </div>
            <form>
            <PriceFilter setFilter={setFilter}/>
            <hr className="border-0 border-t border-[#E5E7EB] my-2 md:my-7" />
            <StockFilter setFilter={setFilter}/>
            <hr className="border-0 border-t border-[#E5E7EB] my-2 md:my-7" />
            <CategoryFilter setFilter={setFilter}/>
            <hr className="border-0 border-t border-[#E5E7EB] my-2 md:my-7" />
            <BrandFilter filter={filter} setFilter={setFilter}/>
            <hr className="border-0 border-t border-[#E5E7EB] my-2 md:my-7" />
            <RatingFilter filter = {filter} setFilter={setFilter}/>
            <hr className="border-0 border-t border-[#E5E7EB] my-2 md:my-7" />
            <button className="cursor-pointer font-semibold text-[#4F46E5]" type="reset" onClick={()=>setFilter(prev => (
                {...prev, 
                category: "All",
                brand: "",
                priceFrom: 0,
                priceTo: 99999,
                inStock: false,
                rating: 0
            }))}>Reset filters</button>
            </form>
            </div>
        </aside>
    )
}

export default Filter;