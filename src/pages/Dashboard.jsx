import LineChartCard from "../components/charts/LineChartCard";
import BarChartCard from "../components/charts/BarChartCard";
import PieChartCard from "../components/charts/PieChartCard";
import AreaChartCard from "../components/charts/AreaChartCard";

export default function Dashboard() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <LineChartCard />
      <BarChartCard />
      <PieChartCard />
      <AreaChartCard />
    </div>
  );
}
