// GraphComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
 // Import CSS for styling

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphComponent = () => {
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 75, 70, 65],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        barThickness: 50, // Adjust the bar thickness here
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'My Skill Levels',
      },
    },
    animation: {
      duration: 2000, // duration of animations
      easing: 'easeInOutBounce', // easing function
    },
  };

  return (
    <div className="graph-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraphComponent;
