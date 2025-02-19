const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['March', 'April', 'May', 'June', 'Jule', 'Agust','Septenber','October','November','December','Januare','February'],
    datasets: [{
      label: '# of Votes',
      data: [100, 200, 300, 500, 200, 1000, 150, 453, 1234, 4567, 9090,1555],
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