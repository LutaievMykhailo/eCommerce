



function LoadingProduct() {
    return (
<div className="py-8 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">

            <div className="flex items-center justify-center rounded-2xl p-6 md:p-10">
                <div className="w-full max-w-lg bg-gray-200 animate-pulse rounded-xl h-100 ">
                    
                </div>
            </div>

  
            <div className="flex flex-col justify-center bg-gray-200 animate-pulse">


            </div>
        </div>



        <div className="mt-20">


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                {
                    Array.from({length : 4}).map((_,index)=>(
                        <div className="h-96 bg-gray-200 animate-pulse rounded-lg" key={index}>

                        </div>
                    ))
                }
            </div>

        </div>

    </div>
    )
}

export default LoadingProduct;