var KWH = [4050, 3800, 4100, 3500, 4578, 4575, 3800];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];
var cntxt = document.getElementById('js--gas_chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'elektriciteit verbruik in KWH',
                data: KWH,
                backgroundColor: [
                    "#5893D4",
                    "#1F3C88",
                    "#070D59",
                    "#0B409C",
                    "#3161A3",
                    "#10316B",
                    "#1F3C88",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});