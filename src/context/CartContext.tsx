import  React, {  createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { CartItem } from "../types/CartItem";


type TypeCartContext = {
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>   ;
}

type CartProviderProps = {
    children: React.ReactNode
};


export const CartContext = createContext<TypeCartContext | null>(null)
 
export default function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>

    )
}

