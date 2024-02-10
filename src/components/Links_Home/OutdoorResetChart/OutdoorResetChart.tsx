import { Box } from "@chakra-ui/react";
import { useState } from "react";
import {Chart as ChartJS, registerables, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js';
import { Line } from "react-chartjs-2";
import Slider from "../../Slider";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const OutdoorResetChart = () => {
  // Individual points for the graph
  const point1 = { x: 30, y: 50 }; // Example values
  const point2 = { x: 70, y: 80 }; // Example values

  const xLabels = [-30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

  // Chart data with individual points
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: 'Outdoor Reset Curve',
        data: [point1, point2],
        fill: false,
        borderColor: 'blue',
        showLine: true, // Display lines between points
        pointRadius: 6, // Adjust the size of the points
        pointBackgroundColor: 'red', // Customize the color of the points
      },
    ],
  };

  // Chart options
  const options: any = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Outdoor Temperature',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Supply Temperature',
        },
        min: 30,
        max: 200,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
  };

  return (
    <Box w="70%" h="500px">
      <Line data={data} options={options} />
      <Slider />
    </Box>
  );
};

export default OutdoorResetChart;
