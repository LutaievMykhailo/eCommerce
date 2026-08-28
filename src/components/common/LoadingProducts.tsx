

function LoadingProducts() {
    return (
        <div className="flex flex-col md:flex-row gap-8 py-16">

            <div className="md:w-[20%] h-150 bg-gray-200 animate-pulse rounded-lg">
            </div>

            <div className="flex-1 min-w-0">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {Array.from({ length: 12 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-96 bg-gray-200 animate-pulse rounded-lg"
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default LoadingProducts;