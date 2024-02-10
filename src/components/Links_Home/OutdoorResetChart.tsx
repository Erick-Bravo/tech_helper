import { Box } from "@chakra-ui/react";
import { useState } from "react";
import {Chart as ChartJS, registerables, CategoryScale, LinearScale, PointElement, LineElement, Title} from 'chart.js';
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const OutdoorResetChart = () => {
  const [curveValues, setCurveValues] = useState<number[]>([
    0
  ]);
  const outdoorTemps = [
    80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
  ];

  // Function to update the curve values
  const updateCurveValues = (index: number, value: number) => {
    const newCurveValues = [...curveValues];
    newCurveValues[index] = value;
    setCurveValues(newCurveValues);
  };

  // Chart data
  const data = {
    labels: outdoorTemps.map(String),
    datasets: [
      {
        label: "Outdoor Reset Curve",
        data: curveValues,
        fill: false,
        borderColor: "blue",
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Outdoor Temperature',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Boiler Water Temperature',
        },
      },
    },
  };

  return (
    <Box w="80%">
      <Line data={data} options={options} />
      {/* Render input controls for adjusting curve values */}
      {curveValues.map((value, index) => (
        <Box key={index}>
          <label>{`Point ${index + 1}: `}</label>
          <input
            type="number"
            value={value}
            onChange={(e) =>
              updateCurveValues(index, parseFloat(e.target.value))
            }
          />
        </Box>
      ))}
    </Box>
  );
};

export default OutdoorResetChart;
