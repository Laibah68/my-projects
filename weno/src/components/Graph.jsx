import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";
import { useRef } from "react";
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);
import {FaArrowTrendUp} from 'react-icons/fa6';

export default function Graph() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sales",
        data: [160, 300, 176, 200, 420, 300, 270],
        borderColor: "#A78BFA",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(167,139,250,0.25)");
          gradient.addColorStop(1, "rgba(167,139,250,0)");
          return gradient;
        },
        pointRadius: 4,
        pointHoverRadius: 5,
        pointBackgroundColor: "#A78BFA",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        callbacks: {
          label: (context) => `$${context.parsed.y}`,
        },
        padding: 6,
        cornerRadius: 6,
        caretSize: 6,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
          color: "#D1D5DB",
          callback: (value) => `$${value}`,
        },
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
      },
      x: {
        ticks: { color: "#9CA3AF" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-[412px] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-medium">Total Sales</span>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-3xl font-bold text-gray-900">$1,124,000</h2>
            <span className="text-[13px] font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-md">
              16% <FaArrowTrendUp className="inline-block ml-1" />
            </span>
          </div>
        </div>
        <select className="text-sm border border-gray-200 rounded-md px-3 py-1 bg-white text-gray-700 focus:outline-none">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="h-[312px] relative">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}
