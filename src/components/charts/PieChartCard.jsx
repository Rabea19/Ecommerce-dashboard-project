import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
export default function PieChartCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");

    if (!error) {
      const formatted = products.map((p) => ({
        name: p.name,
        value: p.stock,
      }));

      setData(formatted);
    }
  }

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-white text-lg mb-4">Traffic Source</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            fill="#f59e0b"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
