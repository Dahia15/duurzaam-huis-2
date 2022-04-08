const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeText = body.querySelector(".mode-text");





let uitgeklapt = false;
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    uitgeklapt = !uitgeklapt;
})

const updatetime = function(){
    var date = new Date();

    var n = date.toDateString();
    
    var time = date.toLocaleTimeString();

    console.log('date:', n);


    if(uitgeklapt === true){
        document.getElementById('js--timeanddate').innerHTML = n + ' ' + time;

    }
    if(uitgeklapt === false){
        document.getElementById('js--timeanddate').innerHTML = n + ' ' + time;
    }

    setTimeout(updatetime, 1)

}


updatetime()


// dataAPI code

"use strict"
const timeDelay = 10000; // time delay refresh data
let refreshTimer = window.setInterval(renderData, timeDelay); // timer data opvragen van server

// jouw persoonlijke URL
const mijnDataURL = "https://data.softwaredeveloper.amsterdam/api/device/71c87eb9/latest"; 

const dataDiv = document.getElementById("dataDiv"); // hier komt de data

async function getSensorData() {
    let url = mijnDataURL;
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let measurementRaw = await getSensorData();
    let measurement = measurementRaw.data[0];
    console.log(measurement);

     // Nieuwe Javascript date maken met de de datum en tijd van de meting
     let datum =  new Date(measurement.datum);
   
     // De meting gegevens wegschrijven naar de div                
     dataDiv.innerHTML = `<p>Sensor: ${measurement.sensor} 
        </p><p>Temperature: ${measurement.value1}
        </p><p> Humidity: ${measurement.value2}
        </p><p> Heatindex: ${measurement.value3}</p>`;
}

renderData(); // start immediately

document.querySelector('#sidebar').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

document.querySelector('#js--timeanddate').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}