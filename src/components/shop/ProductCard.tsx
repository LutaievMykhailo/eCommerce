import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";
import Rating from "./Rating";
import useCartContext from "../../hooks/useCartContext";


type ProductCardProps = {
    product: Product;
}

function ProductCard({product}:ProductCardProps) {
    const cartContext = useCartContext()
    function addToCart() {
        if(cartContext.cart.find(item=>item.product.id === product.id)){
            const newCart = cartContext.cart.map(item=>{
                if(item.product.id === product.id){
                    return {...item, count: item.count + 1}
                }
                return item;
            })
            cartContext.setCart(newCart)
        }else{
            cartContext.setCart(prev=>[...prev, {product: product, count: 1}])
        }
    }
    return(
        <div className={`flex flex-col relative cursor-pointer hover:opacity-80`}>
            <Link to={`/product/${product.id}`}>
                <img className="rounded-lg block w-full" src={product.image} alt="file" />
                <div className="p-4">
                    <div className="font-semibold">
                        <h4 className=" text-[#6B7280] text-xs">{product.category.toUpperCase()}</h4>
                        <h3 className="text-[#111827] text-base mt-1">{product.name}</h3>
                        <span className="text-base mt-1">Price: ${product.price}</span>
                        <p className="text-[#6B7280] font-light text-sm mt-1">{product.description}</p>
                    </div>
                    
                    <Rating rating={product.grade}/>
                </div>

                
                {product.stock === false ? <div className="absolute text-white px-1 lg:px-3 lg:py-2 left-3 top-3 py-1 bg-[#B3A9A9] rounded-md ">out of stock</div> : ""}
            </Link>
            <button onClick={addToCart} className="text-center w-full py-2 px-4 border border-[#E5E7EB] hover:bg-[#dbdbdb] rounded-lg cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.stock}>Add to cart</button>
        </div>
    )
}

export default ProductCard