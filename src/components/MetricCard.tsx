import type { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: ReactNode;
}

const MetricCard = ({title, value, trend, isPositive, icon}: MetricCardProps) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-center text-slate-500">
                <h3 className="font-medium">
                    {title}
                </h3>

                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    {icon}
                </div>
            </div>

            <div>
                <div className="text-3xl font-bold text-slate-800">{value}</div>
                <div className={`text-sm mt-2 font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? '+' : '-'}{trend} from last month
                </div>
            </div>
        </div>
    );
};

export default MetricCard;