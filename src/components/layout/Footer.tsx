export default function Footer() {
    return (
        <footer className="px-2 sm:px-5 lg:px-16 lg:py-16 sm:py-16 py-2 border-t border-[#E5E7EB]">
            <div className="flex justify-between text-[#6B7280]">

                <p className="text-sm sm:text-md">
                    © 2026 Store · Built with React + TypeScript
                </p>

                <div>
                    <h3 className="mb-4 text-[#111827] font-bold text-base">
                        Company
                    </h3>

                    <nav className="flex flex-col gap-2 text-sm sm:text:md">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </nav>
                </div>

            </div>
        </footer>
    )
}