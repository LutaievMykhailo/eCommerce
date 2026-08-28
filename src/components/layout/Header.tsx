import { Search, ShoppingBag } from "lucide-react";
import logo from "../../assets/images/logo.png"
import {  Link, NavLink } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";

type HeaderProps = {
    setSearch: (value:string)=>void
}
function Header({setSearch}: HeaderProps) {
    const cartContext = useCartContext()
    const cartCount = cartContext.cart.reduce((total, item)=>{return total + item.count}, 0)
    return(
        <header className=" px-2 sm:px-5 lg:px-16">
            <div className="border-b border-[#E5E7EB] flex justify-between h-20 items-center">
                <Link to={"/"} className="flex items-center ">
                    <img src={logo} alt="img" />
                    <h1 className=" font-extrabold md:text-2xl text-1xl ml-2">STORE</h1>
                </Link>
                <div className="hidden md:flex  items-center ">
                    <Search className="absolute text-[6B72]" size={20}/>
                    <input onChange={e=>setSearch(e.target.value)} className="relative  outline-none md:py-4 py-2 placeholder:text-[6B7280] md:pl-8 pl-6" type="text " placeholder="Search products,brands..."  name="searchInput" id="" />
                </div>
                <nav className="flex justify-end text-gray-500 md:text-base text-sm  text-center font-medium ">
                    <NavLink className={({isActive})=> isActive ? "text-[#4F46E5]" : "text-[#6B7280]"} to={"/"}>Shop</NavLink>
                    <NavLink className={({isActive})=>`${isActive ? "text-[#4F46E5]" : "text-[#6B7280]"} mx-2 md:mx-6`} to={"/login"}>Login</NavLink>
                    
                    <NavLink to={"/cart"} className={({isActive})=> isActive ? "text-[#4F46E5] relative flex font-semibold px-10 items-center ": "relative flex text-black font-semibold px-10 items-center "} >
                        <ShoppingBag className="absolute left-3 h-5 w-5"/>
                        Cart
                        <span className="absolute right-3 h-5 w-5 bg-[#4F46E5] text-center text-white text-sm rounded-full">{cartCount}</span>
                        </NavLink>
                    
                </nav>
            </div>
            <div className="flex items-center md:hidden py-5 px-6 border-b border-[#E5E7EB]">
                <Search className="absolute text-[6B72]" size={20}/>
                <input onChange={e=>setSearch(e.target.value)} className="relative  outline-none md:py-4 py-2 placeholder:text-[6B7280] md:pl-8 pl-6" type="text " placeholder="Search products,brands..."  name="searchInput" id="" />
            </div>
        </header>
    )
}

export default Header;