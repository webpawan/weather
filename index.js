let input = document.getElementById('inputTag');
let show = document.getElementById('show');
let map = document.getElementById('map');





input.addEventListener('input',()=>{
   let cityName =  input.value;
   apidata(cityName);
})

let flag =true;

const apidata = async (cityName)  =>{
try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7f8a06848c6c6bf8e0b5f4b66005c349`;
let apidata = await fetch(url);
let weatherdata = await apidata.json();
let mapshow = document.getElementById('mymap');
document.getElementById('temp').innerHTML = `${weatherdata.main.temp}&#176;c`;
document.getElementById('city').innerHTML = `city - ${weatherdata.name}`;
mapshow.innerHTML = `<iframe class="px-2" style='height: 50vh; width: 100%;' class="rounded" frameborder="0" scrolling="no" src="https://maps.google.com/maps?q=${weatherdata.name}&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`
document.getElementById('max').innerHTML = ` max -> ${weatherdata.main.temp_max}`;
document.getElementById('min').innerHTML = ` min -> ${weatherdata.main.temp_min}`;
} catch (error) {
 console.log(error);
}
}

apidata();

