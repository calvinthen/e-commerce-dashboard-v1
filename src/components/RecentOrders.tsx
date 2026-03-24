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
            return "bg-orange-100 text-orange-700";
        case "Cancelled":
            return "bg-red-100 text-red-700";
        default:
            return "bg-slate-100 text-slate-700";
        }
    };
    return(
        <div>
            <div className="p-6 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800">Recent Orders</h3>
            </div>

            <div>
                <table>
                    <thead>
                        <thead>

                        </thead>
                    </thead>

                    <tbody>
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default RecentOrders;