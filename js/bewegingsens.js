Chart.defaults.font.size =15;

var ctx = document.getElementById('myChart4');

var stars = [6, 4, 7, 6, 8, 5, 3];
var frameworks = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

var myChart = new Chart(ctx, {
 type: 'bar',

 data: {
    labels: frameworks,
    datasets: [{
        label: 'Bewegingsensor ',
        data: stars,
        backgroundColor: [
            "rgba(133, 185, 203)",
        ],

        borderColor: [
        "rgba(133, 185, 203)",
        "rgba(133, 185, 203)",
        "rgba(133, 185, 203)",
        "rgba(133, 185, 203)",
        "rgba(133, 185, 203)",
        "rgba(133, 185, 203)",
        "rgba(133, 185, 203)",
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