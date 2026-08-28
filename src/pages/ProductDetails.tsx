import { useParams } from "react-router-dom"

import Rating from "../components/shop/Rating"
import { ShoppingBag } from "lucide-react"
import ProductCard from "../components/shop/ProductCard"
import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { getProductById, getProducts } from "../api/productsApi"
import EmptyState from "../components/common/EmptyState"
import LoadingProduct from "../components/common/LoadingProduct"
import ErrorMessage from "../components/common/ErrorMessage"
import useCartContext from "../hooks/useCartContext"

function ProductDetails() {
    const [productById, setProductById] = useState<Product>()
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)
    const {id} = useParams()
    const cartContext = useCartContext()
    const loadProduct = async () =>{
        try{
            setError("");
            setLoading(true);
            const products = await getProducts();
            const product = await getProductById(products, Number(id))
            
            setProductById(product)
            const related = products.filter((item)=>{
                return (item.category === product.category) && (item.id !== product.id)
            })
            setRelatedProducts(
                related
                .sort(()=>Math.random() - 0.5)
                .slice(0,4)
            )

        }
        catch(error){
            setError("Failed to load product")
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        loadProduct();
    },[id])
    
    

    if(loading) return <LoadingProduct/>
    if(error) return <ErrorMessage onRetry={loadProduct} message={error}/>
    if(!productById){
        return <EmptyState/>
    }
    const product = productById
    function addToCart() {
        if(cartContext.cart.find(item=>item.product.id === product.id)){
            const newCart = cartContext.cart.map((item)=>{
                if(item.product.id === product.id){
                    return {...item, count: item.count + count}
                }
                return item
            })
            cartContext.setCart(newCart)
        }else{
            cartContext.setCart(prev=>[...prev, {product: product, count: count}])
        }
    }

    function productCounter(symbol: string) {
        if(symbol === "-"){
            setCount(count -1)
        }else{
            setCount(count+1)
        }
    }

     return (
    <div className="py-8 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">

            <div className="flex items-center justify-center bg-[#F9FAFB] rounded-2xl p-6 md:p-10">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-lg object-contain rounded-xl"
                />
            </div>

  
            <div className="flex flex-col justify-center">

                <span className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide">
                    {product.category}
                </span>

                <h1 className="font-extrabold text-3xl md:text-4xl text-[#111827] mt-2">
                    {product.name}
                </h1>

                <div className="flex items-center mt-3">
                    <Rating rating={product.grade} />
                </div>

                <h3 className="font-bold text-3xl text-[#111827] mt-3">
                    ${product.price}
                </h3>

                <p className="text-base leading-7 text-[#6B7280] mt-5 max-w-xl">
                    {product.description}
                </p>

                <div className="border-t border-[#E5E7EB] my-7" />

                <div className="mb-5">
                    {product.stock ? (
                        <span className="text-sm font-semibold text-green-600">
                            In stock
                        </span>
                    ) : (
                        <span className="text-sm font-semibold text-red-500">
                            Out of stock
                        </span>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">

                    <div className="flex items-center w-28 h-12 border border-[#E5E7EB] rounded-lg overflow-hidden">
                        <button 
                            disabled={count === 1 || !product.stock}
                            onClick={()=>productCounter("-")}
                            className="w-1/3 h-full hover:bg-gray-100 text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            -
                        </button>

                        <span className="w-1/3 text-center font-semibold">
                            {count}
                        </span>

                        <button
                        disabled={!product.stock}
                        onClick={()=>productCounter("+")}
                            className="w-1/3 h-full hover:bg-gray-100 text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            +
                        </button>
                    </div>

                    <button
                        disabled={!product.stock}
                        className="flex-1 flex items-center justify-center gap-2 h-12 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={addToCart}
                    >
                        <ShoppingBag size={20} />
                        Add to Shopping Cart
                    </button>

                </div>

            </div>
        </div>



        <div className="mt-20">

            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                <h2 className="font-bold text-2xl text-[#111827]">
                    Related Products
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                {relatedProducts.map(product=>(
                    <ProductCard product={product}/>
                ))}
            </div>

        </div>

    </div>
)
}

export default ProductDetails