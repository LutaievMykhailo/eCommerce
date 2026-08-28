import type { Dispatch, SetStateAction } from "react";
import type { ProductFilter } from "../../../types/Filter"

type BrandFilterProps = {
    filter: ProductFilter;
    setFilter: Dispatch<SetStateAction<ProductFilter>>
}

const brands = [
    {
        category: "Phones",
        brands: ["Apple", "Samsung", "Xiomi", "Huawei", "Motorola"]
    },
    {
        category: "Laptops",
        brands: ["Apple", "Asus", "HP", "Lenovo"]
    },
    {
        category: "Clothes",
        brands: ["Adidas", "Puma", "Nike"]
    },
    {
        category: "Accessories",
        brands: ["Logitech","Anker","Belkin","JBL","Baseus","UGREEN","Spigen"]
    }
]

function BrandFilter({filter, setFilter} : BrandFilterProps) {
    const currentBrands = filter.category === "All" ? [...new Set(brands.flatMap(item=>item.brands))] : brands.find(item => item.category === filter.category)?.brands || []
    return (
        <div className=" items-center">
            <p className="font-bold text-base">Brands</p>
            <select name="brand" className="w-full mt-3 border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#6B7280] text-sm" onChange={e=>setFilter(prev=>({...prev, brand: e.target.value}))}  id=""  >
                {
                    currentBrands.map((brand, id) =>(
                        <option key={id} value={brand}>{brand}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default BrandFilter;