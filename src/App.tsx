import SalesChart from "./components/SalesChart"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

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

            <div className="h-96 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400">
              Temporary data
            </div>

            <div>
              <SalesChart/>

              <div>
                Recent Sales Widget Go Here
              </div>
            </div>
          </div>

         </main>
      </div>

    </div>
  )
}

export default App