import { React, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getSequnceSort, textTrim } from "../../utils/helper";
import { useEffect } from "react";
const DashboardDoughnutChart = ({ doughnutData }) => {
  Chart.register(ArcElement, ChartDataLabels);
  const options = {
    layout: {
      padding: {
        top: 50,
        bottom: 50,
        right: 65,
        left: 65,
      },
    },
    plugins: {
      datalabels: {
        display: true,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  const label = [];
  const outer = [];
  const inner = [];
  if (doughnutData) {
    doughnutData &&
      getSequnceSort(doughnutData).map((data) => {
        label.push(textTrim(data.label, 9));
        outer.push(data.outer);
        inner.push(data.inner, data.difference);
      });
  }
  const data = {
    labels: label,
    datasets: [
      {
        data: outer,
        backgroundColor: [
          "#85b812",
          "#1ec1d9",
          "#e9b72f",
          "#e46666",
          "#a86adb",
        ],
        labels: "",
        datalabels: {
          labels: {
            index: {
              color: "#404040",
              font: {
                size: 13,
                weight: 600,
              },

              formatter: (val, ctx) => ctx.chart.data.labels[ctx.dataIndex],
              align: "end",
              anchor: "end",
            },
            value: "",
          },
        },
      },
      {
        data: inner,
        backgroundColor: [
          "#85b812",
          "rgb(192, 192, 192)",
          "#1ec1d9",
          "rgb(192, 192, 192)",
          "#e9b72f",
          "rgb(192, 192, 192)",
          "#e46666",
          "rgb(192, 192, 192)",
          "#a86adb",
          "rgb(192, 192, 192)",
        ],
        datalabels: {
          labels: {
            value: {
              opacity: 0.0,
              padding: 1,
              align: "center",
            },
          },
        },
      },
    ],
  };

  const DimdoughnutChart = useMemo(() => {
    return <Doughnut data={data} options={options} />;
  }, [doughnutData]);

  return <div className="chart-container">{DimdoughnutChart}</div>;
};

export default DashboardDoughnutChart;
