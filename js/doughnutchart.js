let chart2 = document.getElementById('doughnutchart').getContext('2d');

    let CountChart = new Chart(chart2, { 
        type: 'doughnut',
        data: {
                labels : ['Spiderman','Hulk','Iron Man','Captain America','Wolverine','Thor'],
                datasets : [{
                    label : 'No. of Votes',
                    data : [300, 270, 320, 295, 283, 320],
                    backgroundColor: ['rgb(54, 162, 235)','rgb(162, 205, 72)','rgb(245, 0, 0)','rgb(75, 192, 192)','rgb(255, 255, 0)','rgb(36, 36, 36)'],
                    borderWidth : 1,
                    borderColor : 'gray',
                    hoverBorderWidth : 3,
                    hoverBorderColor: 'black'
                    }]

               },
        options : {
                plugins : {
                    title: {
                        display: true,
                        text : 'No. of Votes',
                        color: 'black',
                        font : {
                            size: 20
                        },
                        padding: 10
                    },
                    legend:{
                        display: true,
                        position: 'top'
                    }
                },
            cornerRadius: 5,
            responsive: true,
            maintainAspectRatio: false,
            }

    })