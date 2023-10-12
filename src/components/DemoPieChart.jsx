import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
//   DoughnutElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title,
  LinearScale,
  PointElement,
//   DoughnutElement
);

const DemoPieChart = () => {

    


    const data = {
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      datasets: [
        {
          label: "Fake Data!",
          data: [55, 31, 14],
          backgroundColor: [
            "rgba(152, 216, 158, 1)",
            "rgba(246, 220, 125, 1)",
            "rgba(238, 132, 132, 1)"
          ],
          hoverOffset: 4,
        },
      ],
    };

  return (
    <div className="pie__chart">
      <h3 className='font-bold text-[18px]'>Top Products</h3>

      <div className="pie__chart__box">
        <Doughnut
          options={{
            cutout: 60,
            responsive: true,
            maintainAspectRatio: false,
          }}
          data={data}
        />
      </div>
    </div>
  );
}

export default DemoPieChart;