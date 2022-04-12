const apiKey = '728e3def87';

let liveDiv, selectMenu, weerIcon, info1, info2, info3, info4;

const startLiveWeer = () => {

  liveDiv = document.getElementById('live');
  selectMenu = document.getElementById('city');

  selectMenu.addEventListener('change', laadWeerbericht);

  weerIcon = document.querySelector('#live img');
  info1 = document.querySelector('#live h1');
  info2 = document.querySelector('#live h2');
  info3 = document.querySelector('#live p');
  info4 = document.querySelector('#live h3');

  setTimeout(laadWeerbericht, 1000);
}

const laadWeerbericht = () => {
  let plaats = haalGeselecteerdePlaats();

  weerIcon.src = 'img/loading.gif';

  setTimeout(() => {

    info1.innerHTML = '';
    info2.innerHTML = '';
    info3.innerHTML = '';
    info4.innerHTML = '';

    laadJSON(plaats)
  }, 1500);
}

const haalGeselecteerdePlaats = () => {

  let selectedIndex = selectMenu.selectedIndex;
  return selectMenu.options[selectedIndex].value;


}

const laadJSON = (plaats) => {
  fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=" + plaats, {
    method: "GET",
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': '5d5a1c73bemsh083096883c74cbep1f9270jsn42a958e48bc4'
    }
  })
    .then((resp) => {
      resp.json().then(json => {
        toonWeerbericht(json)
      })
    })
};

const toonWeerbericht = (weerbericht) => {

  weerIcon.src = weerbericht.current.condition.icon;

  info1.innerHTML = weerbericht.location.name;
  info2.innerHTML = weerbericht.current.condition.text;
  // info3.innerHTML = weer.verw;
  info4.innerHTML = weerbericht.current.temp_c + '\u2103';

}

window.addEventListener('DOMContentLoaded', startLiveWeer);

