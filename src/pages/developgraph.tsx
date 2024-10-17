import { useEffect, useRef, useState } from "react";
import { Header } from "../components/header";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
} from "chart.js";
import { graph } from "../type/type";
import axios from "axios";

Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title);

export function DevelopGraph() {
  const [data, setData] = useState<graph>({
    develop: 0,
    design: 0,
    enterprise: 0,
  });
  useEffect(() => {
    function getDevelopData() {
      axios
        .get("YOUR_API_ENDPOINT")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error("API 요청 오류:", err);
        });
    }

    getDevelopData();
  }, []);

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const graph = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["frontEnd", "backEnd", "Android", "IOS"],
          datasets: [
            {
              label: "개발자",
              data: [data.develop, data.design, data.enterprise],
              borderWidth: 1,
              backgroundColor: ["blue", "red", "green"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return () => {
        graph.destroy();
      };
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
