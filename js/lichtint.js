Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart3');

var stars = [5, 7, 3, 4, 8, 4, 5];
var frameworks = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

var myChart = new Chart(ctx, {
 type: 'line',

 data: {
    labels: frameworks,
    datasets: [{
        label: 'Lichtintensiteit ',
        data: stars,
        backgroundColor: [
            "rgba(64, 104, 130)",
        ],

        borderColor: [
        "rgba(64, 104, 130)",
        "rgba(64, 104, 130)",
        "rgba(64, 104, 130)",
        "rgba(64, 104, 130)",
        "rgba(64, 104, 130)",
        "rgba(64, 104, 130)",
        "rgba(64, 104, 130)",
        ],
        borderRadius: 5,
        borderWidth: 3,
        barPercentage: 1
                }]
        },
 
 options: {
   scales: {
        x: {
        grid: {
          display: false,
              }
            },
        y: {
        grid: {
          display: false,
              }
            }
           }
         },

});