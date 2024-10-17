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
import axios from "axios";
import { developergraph } from "../type/type";

Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title);

export function DevelopGraph() {
  const [data, setData] = useState<developergraph>({
    frontEnd: 30,
    backEnd: 62,
    Android: 10,
    IOS: 20,
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
          alert("그래프를 불러오는데 실패했습니다.");
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
          labels: ["FrontEnd", "BackEnd", "Android", "IOS"],
          datasets: [
            {
              label: "개발자",
              data: [data.frontEnd, data.backEnd, data.Android, data.IOS],
              backgroundColor: ["blue", "red", "green", "yellow"],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 100,
            },
          },
          maintainAspectRatio: false,
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
        <canvas className="font-bold h-[650px]" ref={chartRef}></canvas>
      </div>
    </div>
  );
}
