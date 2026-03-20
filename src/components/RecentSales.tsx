const salesData = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", initials: "OM" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", initials: "JL" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", initials: "IN" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", initials: "WK" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", initials: "SD" }
];

const RecentSales = () => {
    return(
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1 flex flex-col h-full">
            <h3 className="text-lg font-bold mb-2 text-slate-800 text-center">
                Recent Sales
            </h3>
            <p className="text-sm text-slate-500 mb-6 text-center">You made 265 sales this month.</p>

            <div className="space-y-6">
                {salesData.map((sale, index)=> (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">

                            <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-semibold text-slate-700"> 
                                {sale.initials}
                            </div>

                            <div>
                                <p className="text-sm font-medium text-slate-900">{sale.name}</p>
                                <p className="text-sm text-slate-500">{sale.email}</p>
                            </div>

                            <div className="font-bold text-green-500">
                                {sale.amount}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default RecentSales;