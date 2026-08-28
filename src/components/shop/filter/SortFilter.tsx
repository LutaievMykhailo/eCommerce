    import type { Dispatch, SetStateAction } from "react";

    type SortFilterProps ={
        sort: string;
        setSort: Dispatch<SetStateAction<string>>
    }

    const sortOptions = [
        {
            name: "Recommended",
            value: ""
        },
        {
            name: "Price: low to high",
            value: "price_asc"
        },
        {
            name: "Price: high to low",
            value: "price_desc"
        },
        {
            name: "Rating",
            value: "rating"
        }
    ]
    function    SortFilter({sort, setSort}:SortFilterProps){
        return(
            <div className="flex items-center"> 
                        <span className="mr-1 hidden  md:mr-3 text-[#6B7280]">
                            Sort:
                        </span>
                            <select className="border border-[#E5E7EB] rounded-lg text-[#111827] font-semibold md:px-3 py-2 md-py-1 px-1" value={sort}  name="" id="" onChange={e=>setSort(e.target.value)}>
                                {
                                    sortOptions.map((sortOption, id) => (
                                        <option className=" text-[#111827] font-semibold" key={id} value={sortOption.value} >
                                            {sortOption.name}
                                        </option>
                                    ))
                                }
                            </select>
                                
                </div>
        )
    }

    export default SortFilter;