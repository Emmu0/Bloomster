import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { textTrim } from "../../utils/helper";

const DoughnutChart = ({ progressObj }) => {
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
        enabled: true,
      },
    },
  };

  let dimlabel = [];
  let dimouter = [];
  let diminner = [];
  if (progressObj?.skills) {
    progressObj?.skills?.map((skills, SKey) => {
      if (skills?.courseCount > 0) {
        dimlabel.push(textTrim(skills.name, 7));
        dimouter.push(100);
        diminner.push(skills?.proficiency, 100 - skills?.proficiency);
      }
    });
  } else {
    progressObj?.courses?.map((course, CKey) => {
      // if (course?.length > 0 ) {

      dimlabel.push(textTrim(course?.name, 7));
      dimouter.push(100);
      diminner.push(course?.proficiency, 100 - course?.proficiency);
      // }
    });
  }

  const dimChartData = {
    labels: dimlabel,
    datasets: [
      {
        data: dimouter,
        backgroundColor: [
          "#85b812",
          "#1ec1d9",
          "#e9b72f",
          "#e46666",
          "#a86adb",
          "#0ba9ab",
          "#1e5a9a",
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
        data: diminner,
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
    return <Doughnut data={dimChartData} options={options} />;
  }, [progressObj]);

  return (
    <React.Fragment>
      <div className="chart-container">{DimdoughnutChart}</div>
    </React.Fragment>
  );
};
export default DoughnutChart;
