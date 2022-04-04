const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeText = body.querySelector(".mode-text");



toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

const updatetime = function(){
    var date = new Date();

    var n = date.toDateString();
    
    var time = date.toLocaleTimeString();
    
    document.getElementById('js--timeanddate').innerHTML = n + ' ' + time;


    setTimeout(updatetime, 1000)
}

updatetime()



