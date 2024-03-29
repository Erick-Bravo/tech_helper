import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  Chart as ChartJS,
  registerables,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import MaxODSlider from "./Sliders/MaxODSlider";
import MinODSlider from "./Sliders/MinODSlider";
import MaxSupplySlider from "./Sliders/MaxSupplySlider";
import MinSupplySlider from "./Sliders/MinSupplySlider";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const OutdoorResetChart = () => {
  const [maxODTemp, setMaxODTemp] = useState(68);
  const [minODTemp, setMinODTemp] = useState(5);
  const [maxSupplyTemp, setMaxSupplyTemp] = useState(180);
  const [minSupplyTemp, setMinSupplyTemp] = useState(86);
  // Individual points for the graph
  const point1 = { x: -40, y: maxSupplyTemp };
  const point2 = { x: minODTemp, y: maxSupplyTemp };
  const point3 = { x: maxODTemp, y: minSupplyTemp };
  const point4 = { x: maxODTemp, y: 20 };

  const xLabels = [-30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  // Chart data with individual points
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "Outdoor Reset Curve",
        data: [point1, point2, point3, point4],
        fill: false,
        borderColor: "#3182ce",
        showLine: true, // Display lines between points
        pointRadius: 6, // Adjust the size of the points
        pointBackgroundColor: "red", // Customize the color of the points
      },
    ],
  };

  // Chart options
  const options: any = {
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Outdoor Temperature",
        },
        min: -30,
        max: 90,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        title: {
          display: true,
          text: "Supply Temperature",
        },
        min: 30,
        max: 200,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            console.log(context);
            
            if (context.tooltip.dataPoints) {
              const xValue = context.tooltip.dataPoints[0].parsed.x;
              const yValue = context.tooltip.dataPoints[0].parsed.y;
              return `(${xValue}, ${yValue})`;
            }
            return "";
          },
        },
      },
    },
  };

  return (
    <Box w="70%" h="500px">
      <Line data={data} options={options} />
      <Flex flexDir="column" alignItems="center" w="100%" pb="60px">
        <Text fontWeight="bold" m="25px 0 10px">
          Max Outdoor Temp
        </Text>
        <MaxODSlider maxODTemp={maxODTemp} setMaxODTemp={setMaxODTemp} />
        <Text fontWeight="bold" m="5px 0 10px">
          Min Outdoor Temp
        </Text>
        <MinODSlider minODTemp={minODTemp} setMinODTemp={setMinODTemp} />
        <Text fontWeight="bold" m="5px 0 10px">
          Max Supply Temp
        </Text>
        <MaxSupplySlider
          maxSupplyTemp={maxSupplyTemp}
          setMaxSupplyTemp={setMaxSupplyTemp}
        />
        <Text fontWeight="bold" m="5px 0 10px">
          Min Supply Temp
        </Text>
        <MinSupplySlider
          minSupplyTemp={minSupplyTemp}
          setMinSupplyTemp={setMinSupplyTemp}
        />
      </Flex>
    </Box>
  );
};

export default OutdoorResetChart;
