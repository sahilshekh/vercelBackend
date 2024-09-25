import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const MISReport = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Success', 'Error'],
        datasets: [{
          label: '# of Operations',
          data: [12, 5], // Example data
          backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default MISReport;
