import { Bell, Search } from "lucide-react";

const Topbar = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

            {/* Search Bar */}
            <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg w-96 focus-within:ring-2 ring-blue-500 transition">
                <Search/>
                <input type="text" 
                placeholder="Search for orders, products..."
                className="bg-transparent border-none outline-none ml-2 w-full text-slate-700"
                />
            </div>

            <div className="flex items-center gap-4 text-slate-500">
                <button className="hover:text-blue-600 transition">
                    <Bell size={20}/>
                </button>
                
                <div className="h-9 w-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold border border-blue-200 cursor-pointer">
                    CT
                </div>
            </div>
        </header>
    );
}

export default Topbar;