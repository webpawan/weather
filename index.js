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
    // let mapurl = `http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid=7f8a06848c6c6bf8e0b5f4b66005c349`
let apidata = await fetch(url);
let weatherdata = await apidata.json();
document.getElementById('temp').innerHTML = `${weatherdata.main.temp}&#176;c`;
document.getElementById('city').innerHTML = `city - ${weatherdata.name}`;
document.getElementById('max').innerHTML = ` max - ${weatherdata.main.temp_max}`;
document.getElementById('min').innerHTML = `min - ${weatherdata.main.temp_min}`;
console.log(weatherdata);
} catch (error) {
 console.log(error);
}
}

apidata();

