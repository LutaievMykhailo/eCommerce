import { useState, type Dispatch, type SetStateAction } from "react";
import type { ProductFilter } from "../../../types/Filter";
type RatingFilterProps = {
    filter: ProductFilter;
    setFilter: Dispatch<SetStateAction<ProductFilter>>
}

function RatingFilter({filter, setFilter}: RatingFilterProps) {
    const [hoverRating, setHoverRating] = useState(0);
    return(
        <div className="">
                <p className="font-bold text-base">Rating</p>
                <div className="flex mt-3">
                    {
                        Array.from({length: 5}).map((_,index) =>(
                        <svg onMouseEnter={()=>setHoverRating(index+1)} onMouseLeave={()=>setHoverRating(0)}  onClick={()=>setFilter(prev=>({...prev, rating: index+1}))} 
                                    className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer"
                                fill={
                                index < (hoverRating || filter.rating) ? "gold" : "gray"
                            }
                            key={index}
                            viewBox="0 0 24 24" 
                        >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        ))
                    }
                </div>
            
        </div>
    )
}

export default RatingFilter;