const orders = [
  { id: "#ORD-7352", customer: "Alex Johnson", date: "Oct 24, 2026", status: "Completed", amount: "$125.00" },
  { id: "#ORD-7353", customer: "Sarah Williams", date: "Oct 24, 2026", status: "Pending", amount: "$45.50" },
  { id: "#ORD-7354", customer: "Michael Brown", date: "Oct 23, 2026", status: "Completed", amount: "$299.99" },
  { id: "#ORD-7355", customer: "Emily Davis", date: "Oct 22, 2026", status: "Cancelled", amount: "$89.00" },
  { id: "#ORD-7356", customer: "James Wilson", date: "Oct 22, 2026", status: "Completed", amount: "$340.20" },
];

const RecentOrders = () => {

    // Helper function to color the status badges
    const getStatusColor = (status: string) => {
        switch (status) {
        case "Completed":
            return "bg-green-100 text-green-700";
        case "Pending":
            return "bg-orange-100 text-orange-600";
        case "Cancelled":
            return "bg-red-100 text-red-700";
        default:
            return "bg-slate-100 text-slate-700";
        }
    };
    return(
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mt-8 overflow-hidden">

            <div className="p-6 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800">Recent Orders</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                            <th className="p-4 font-medium">Order ID</th>
                            <th className="p-4 font-medium">Customer</th>
                            <th className="p-4 font-medium">Date </th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-700">
                        {orders.map((order, index) => (
                            <tr key={index} className="hover:bg-slate-50 transition">
                                <td className="p-4 font-medium text-slate-900">
                                    {order.id}
                                </td>

                                <td className="p-4">    
                                    {order.customer}
                                </td>

                                <td className="p-4  text-slate-500">
                                    {order.date}
                                </td>

                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>

                                <td className="p-4 font-medium">
                                    {order.amount}
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default RecentOrders;