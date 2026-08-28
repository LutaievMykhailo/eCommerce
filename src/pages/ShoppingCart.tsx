
import ShoppingCartItem from "../components/shoppingCart/ShoppingCartItem";
import type { CartItem } from "../types/CartItem";
import useCartContext from "../hooks/useCartContext";

function ShoppingCart() {
    const cartContext = useCartContext()
    const removeCartItems = (cartItem: CartItem)=>{
        const removedCartItems = cartContext.cart.filter((item)=>{
            return (item.product.id !== cartItem.product.id )
        })
        cartContext.setCart(removedCartItems);
    }
    const totalPrice = cartContext.cart.reduce((total, item)=>{return total + (item.product.price * item.count)}, 0)
    const cartItemsCount = cartContext.cart.reduce((totalCount, item)=>{return totalCount + item.count},0)
return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 py-8 sm:px-6 md:px-10 lg:p-16">
        
        <div className="flex flex-col flex-1 min-w-0">
            
            <h1 className="text-[#111827] text-xl sm:text-2xl font-extrabold">
                Shopping Cart ({cartItemsCount} items)
            </h1>

            <div className="flex my-6">
                <h3 className="text-[#6B7280] flex-1 font-semibold text-sm">
                    Products
                </h3>
            </div>

            <div className="flex flex-col">
                {cartContext.cart.length > 0 ? (
                    cartContext.cart.map((item) => (
                        <ShoppingCartItem
                            key={item.product.id}
                            cartItem={item}
                            removedCartItems={removeCartItems}
                        />
                    ))
                ) : (
                    <p className="text-[#6B7280]">
                        Cart is empty
                    </p>
                )}
            </div>

        </div>

        {/* Order Summary */}
        <div className="flex flex-col p-5 sm:p-6 md:p-8 border border-[#E5E7EB] rounded-xl w-full lg:w-[320px] h-fit shrink-0">

            <h1 className="text-[#111827] text-xl font-extrabold">
                Order Summary
            </h1>

            <div className="mt-6 flex flex-col">

                <div className="flex justify-between gap-4">
                    <h3 className="text-[#6B7280] font-semibold text-sm">
                        Subtotal
                    </h3>

                    <h3 className="text-[#111827] text-sm font-semibold">
                        ${totalPrice.toFixed(2)}
                    </h3>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between gap-4">
                    <h2 className="text-md text-[#111827] font-bold">
                        Total Due
                    </h2>

                    <h2 className="text-lg text-[#4F46E5] font-extrabold">
                        ${totalPrice.toFixed(2)}
                    </h2>
                </div>

                <button
                    className="my-6 bg-[#4F46E5] hover:bg-[#4338CA] transition-colors rounded-lg text-white px-4 py-3 font-semibold"
                    type="button"
                >
                    Proceed to Checkout
                </button>

            </div>
        </div>

    </div>
)
}

export default ShoppingCart;