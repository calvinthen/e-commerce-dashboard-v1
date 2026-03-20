import { DollarSign, ShoppingBag, Users, Activity } from "lucide-react";
import MetricCard from "./components/MetricCard"
import SalesChart from "./components/SalesChart"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import RecentSales from "./components/RecentSales";

function App() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar/>

      <div className="flex-1 flex flex-col">
         <Topbar/>

         <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">

            <h1 className="text-2xl font-bold text-slate-800 mb-6">
              Dashboard Overview
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard 
                title="Total Revenue" value="$45,231.89" trend="20.1%" isPositive={true} 
                icon={<DollarSign size={24} />} 
              />

              <MetricCard 
                title="Active Users" value="+2,350" trend="10.5%" isPositive={true} 
                icon={<Users size={24} />} 
              />

              <MetricCard
                title="Total Sales" value="+12,234" trend="4.2%" isPositive={true}
                icon={<ShoppingBag size={24}/>}
              />

              <MetricCard
                title="Bounce Rate " value="24.5%" trend="2.1%" isPositive={true}
                icon={<Activity size={24}/>}
              />

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <SalesChart/>

              <RecentSales/>
            </div>
          </div>

         </main>
      </div>

    </div>
  )
}

export default App