import {Home, Package, ShoppingCart, Users} from "lucide-react";

const Sidebar = () => {

    return(
        <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-slate-800 flex items-center gap-2">
                <span className="text-blue-500">✦</span>AdminPro
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-lg text-white">
                  <Home size={20}/>  Dashboard
                </a>

                <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition">
                   <Package size={20}/> Products
                </a>
                
                 <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition">
                   <ShoppingCart size={20}/> Order
                </a>

                 <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition">
                   <Users size={20}/> Customers
                </a>
            </nav>
        </aside>
    );


};

export default Sidebar;