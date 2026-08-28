import { Link } from "react-router-dom";


export default function Register() {
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-10 border border-[#E5E7EB] ">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold text-[#111827] mb-2">Create Account</h1>
                <p className="text-sm font-normal text-[#6B7280]">Join us today for exclusive tech releases</p>
            </div>
            <form action="" className="flex flex-col">
                <div className="flex flex-col mt-6">
                    <label className="font-semibold text-sm text-[#111827] mb-1">Full Name</label>
                    <input className="w-full p-3 border border-[#E5E7EB] rounded-md" type="text" placeholder="name" name="" id="" />
                </div>
                <div className="flex flex-col mt-6">
                    <label className="font-semibold text-sm text-[#111827] mb-1">Email Adress</label>
                    <input className="w-full p-3 border border-[#E5E7EB] rounded-md" type="email" placeholder="you@domain.com" name="" id="" />
                </div>
                <div className="flex flex-col mt-6">
                    <label className="font-semibold text-sm text-[#111827] mb-1">Password</label>
                    <input className="w-full p-3 border border-[#E5E7EB] rounded-md" type="password" placeholder="password" name="" id="" />
                </div>
                <div className="flex flex-col mt-6">
                    <label className="font-semibold text-sm text-[#111827] mb-1">Confirm Password</label>
                    <input className="w-full p-3 border border-[#E5E7EB] rounded-md" type="password" placeholder="confirm password" name="" id="" />
                </div>
                <button className="bg-[#4F46E5] text-white mb-4 px-4 py-2 rounded-lg" type="submit">Create account</button>
            </form>
            <div className="flex items-center justify-center">
                <p className="text-sm text-[#6B7280] mr-1">Already have an account?</p>
                <Link to={"/login"} className="text-[#4F46E5] text-sm font-semibold">Login</Link>
            </div>
        </div>
        </div>
    )
}

