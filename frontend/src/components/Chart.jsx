import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Chart = ({ data, selectedPeriod = "Years" }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item.month),
        datasets: [
          {
            label: "Projects",
            data: data.map((item) => item.projects),
            backgroundColor: "#3AAFA9",
            borderSkipped: false,
            barPercentage: 0.7,
            categoryPercentage: 0.7,
          },
          {
            label: "News",
            data: data.map((item) => item.news),
            backgroundColor: "#E0F2F0",
            borderSkipped: false,
            barPercentage: 0.7,
            categoryPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            align: "end",
            labels: {
              usePointStyle: true,
              pointStyle: "rectRounded",
              boxWidth: 12,
              boxHeight: 12,
              padding: 16,
              color: "#414853",
              font: {
                size: 12,
                weight: "normal",
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 350,
            ticks: {
              stepSize: 50,
              font: {
                size: 10,
              },
              color: "#9ca3af",
            },
            grid: {
              color: "#f3f4f6",
              drawBorder: false,
            },
          },
          x: {
            ticks: {
              font: {
                size: 10,
              },
              color: "#9ca3af",
              maxRotation: 0,
              minRotation: 0,
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data, selectedPeriod]);

  return (
    <div className="h-72 w-full">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Chart;
