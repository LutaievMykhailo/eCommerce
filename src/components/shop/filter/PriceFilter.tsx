
import type { ProductFilter } from "../../../types/Filter";
import type {Dispatch, SetStateAction } from "react";



type PriceFilterProps = {
    setFilter: Dispatch<SetStateAction<ProductFilter>>
}

function PriceFilter({setFilter}: PriceFilterProps) {
    
    return (
        <div className="">
            <div>
                <h3 className="font-bold text-base">Price</h3>
            </div>
            <div className="flex flex-row mt-3">
                <input className="border border-[#E5E7EB] w-full min-w-0   rounded-lg mr-3 px-3 py-2 " type="number" placeholder="from" onChange={e=>setFilter(prev=>({...prev, priceFrom: Number(e.target.value)}))} name="priceFrom" id="" />
                <input className="border border-[#E5E7EB] w-full min-w-0 rounded-lg px-3 py-2" type="number" placeholder="to" onChange={e=>setFilter(prev=>({...prev, priceTo: e.target.value === "" ? 99999 : Number(e.target.value)}))} name="priceTo" id="" />
            </div>

        </div>
    )
}

export default PriceFilter;

