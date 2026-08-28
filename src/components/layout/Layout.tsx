
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";



function Layout() {
        const [search, setSearch] = useState("")
    return(
        <>
        <Header setSearch={setSearch}/>
        <main className="min-h-screen w-full px-2 sm:px-5 lg:px-16">
            <Outlet context={{search}}/>
        </main>
        
        <Footer/>
        </>
    )
}

export default Layout;