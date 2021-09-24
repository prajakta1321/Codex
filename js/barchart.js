const pollData = [
    {
      option: "F.R.I.N.D.S",
      votes: 26,
      color: "rgb(255, 99, 132)"
    },
    {
      option: "Game of Thrones",
      votes: 30,
      color: "rgb(54, 162, 235)"
    },
    {
      option: "The Big Bang Theory",
      votes: 29,
      color: "rgb(36, 36, 36)"
    },
    {
      option: "Stranger Things",
      votes: 28,
      color: "rgb(255, 159, 64)"
    },
    {
      option: "Money Heist",
      votes: 31,
      color: "rgb(75, 192, 192)"
    },
    {
      option: "Sherlock",
      votes: 24,
      color: "rgb(255, 206, 86)"
    },
    {
      option: "House of Cards",
      votes: 25,
      color: "rgb(153, 102, 255)"
    }
  ];   //Array of options
  
  const pollForm = document.querySelector("#pollForm");
  
  pollForm.addEventListener("submit", pollFormSubmit);
  
  function pollFormSubmit(event) {
    event.preventDefault();
    const pollOptionInput = pollForm.querySelector("input[name='pollOptions']:checked");
    if(pollOptionInput) {
      const pollOptionValue = pollOptionInput.value;
      pollData.find(pollOption => pollOption.option === pollOptionValue).votes++;
      pollChart.data.datasets[0].data = pollData.map(pollOption => pollOption.votes);
      pollChart.update();
      pollForm.reset();
    }
  }
  
  function rgbToRgba(rgb, alpha=1) {
    return `rgba(${rgb.substring(rgb.indexOf('(')+1, rgb.length-1).split(',').join()}, ${alpha})`;
  } //change rgb to rgba
  
  const ctx = document.getElementById('chart').getContext('2d');
  const pollChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: pollData.map(pollOption => pollOption.option),

      datasets: [{
        label: 'No. of Votes',
        data: pollData.map(pollOption => pollOption.votes),
        backgroundColor: pollData.map(pollOption => rgbToRgba(pollOption.color, 0.75)),
        borderWidth: 3,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text: 'Favorite Superheroes',
        fontColor: "#333",
        fontSize: 20,
        padding: 20
      },
      legend: {
        display: false,
      }
    }
});