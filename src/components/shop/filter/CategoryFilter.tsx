import type { Dispatch, SetStateAction } from "react";
import type { ProductFilter } from "../../../types/Filter";

type CategoryFilterProps = {
    setFilter: Dispatch<SetStateAction<ProductFilter>>
}
const categories = [
  "All",
  "Phones",
  "Laptops",
  "Clothes",
  "Accessories"
];

function CategoryFilter({setFilter}: CategoryFilterProps) {
    return(
        <div className="">
            <p className=" font-bold text-base">Categories</p>
                <select className="w-full mt-3 border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#6B7280] text-sm" name="category" onChange={e=>setFilter(prev=>({...prev, category: e.target.value, brand: ""}))} id="" >
                    {
                        categories.map(categories=>(
                            <option key={categories} value={categories}>
                                {categories}
                            </option>
                        ))
                    }
            </select>
        </div>
    )
}

export default CategoryFilter;