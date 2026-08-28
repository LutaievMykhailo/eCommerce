import { TrashIcon } from "lucide-react"


import type { CartItem } from "../../types/CartItem";
import useCartContext from "../../hooks/useCartContext";

type CartItemProps={
    cartItem: CartItem;
    removedCartItems: (item: CartItem)=>void
}

function ShoppingCartItem({cartItem ,removedCartItems} : CartItemProps) {
    const cartContext = useCartContext()
    const cartCounter = (symbol: string)=>{
        const newCart = cartContext.cart.map(item=>{
            if(item.product.id === cartItem.product.id){
                return {...item, count: symbol === "decrease" ? item.count -1 : item.count +1}
            }
            return item;
        })
        cartContext.setCart(newCart)
    }
    return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4 border border-[#E5E7EB] rounded-lg mt-4">

        <div className="flex flex-row gap-3 items-center min-w-0">

            <img
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shrink-0"
                src={cartItem.product.image}
                alt={cartItem.product.name}
            />

            <div className="flex flex-col min-w-0">
                <h2 className="text-[#111827] text-md font-bold truncate">
                    {cartItem.product.name}
                </h2>

                <h4 className="text-[#6B7280] text-sm">
                    {cartItem.product.category}
                </h4>

                <h4 className="text-[#111827] font-semibold text-sm">
                    ${cartItem.product.price} each
                </h4>
            </div>

        </div>

        {/* Actions */}
        <div className="flex flex-row justify-between sm:justify-end gap-4 items-center">

            <div className="flex items-center w-24 sm:w-28 h-10 border border-[#E5E7EB] rounded-lg overflow-hidden shrink-0">

                <button
                    onClick={() => cartCounter("decrease")}
                    className="w-1/3 h-full hover:bg-gray-100 text-sm cursor-pointer disabled:cursor-not-allowed"
                    disabled={cartItem.count === 1}
                >
                    -
                </button>

                <span className="w-1/3 text-center font-semibold">
                    {cartItem.count}
                </span>

                <button
                    onClick={() => cartCounter("increase")}
                    className="w-1/3 h-full hover:bg-gray-100 text-sm cursor-pointer"
                >
                    +
                </button>

            </div>

            <h3 className="font-semibold whitespace-nowrap">
                ${cartItem.product.price * cartItem.count}
            </h3>

            <TrashIcon
                onClick={() => removedCartItems(cartItem)}
                className="hover:bg-gray-200 cursor-pointer shrink-0"
            />

        </div>

    </div>
)
}


export default ShoppingCartItem;