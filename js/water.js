var KWH = [11, 15, 13, 9, 15, 17, 10 ];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];
var cntxt = document.getElementById('js--water_chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'Water verbruik per week in liter',
                data: KWH,
                backgroundColor: [
                    "#85b9cb",
                    "#6dabc1",
                    "#559db7",
                    "#468ba4",
                    "#418198",
                    "#316375",
                    "#224551",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});
