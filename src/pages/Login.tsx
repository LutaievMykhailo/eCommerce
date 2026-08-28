import { Link } from "react-router-dom";


function Login() {
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-10 border border-[#E5E7EB] ">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold text-[#111827] mb-2">Welcome back</h1>
                <p className="text-sm font-normal text-[#6B7280]">Enter your credentials to access your account</p>
            </div>
            <form action="" className="flex flex-col">
                <div className="flex flex-col mt-6">
                    <label className="font-semibold text-sm text-[#111827] mb-1">Email Address</label>
                    <input className="w-full p-3 border border-[#E5E7EB] rounded-md" type="email" placeholder="you@domain.com" name="" id="" />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between mb-1">
                        <label className="font-semibold text-sm text-[#111827]">Password</label>
                        <a href="#" className="text-[#4F46E5] text-sm font-semibold">Forgot password? </a>
                    </div>
                    <input placeholder="Password" className="w-full p-3 mb-6 border border-[#E5E7EB] rounded-md" type="password" name="" id="" />

                </div>
                <button className="bg-[#4F46E5] text-white mb-4 px-4 py-2 rounded-lg" type="submit">Sign In</button>
            </form>
            <div className="flex items-center justify-center">
                <p className="text-sm text-[#6B7280] mr-1">Don't have an account?</p>
                <Link to={"/register"} className="text-[#4F46E5] text-sm font-semibold">Register</Link>
            </div>
        </div>
        </div>

    )
}

export default Login;