let wpbtn = document.getElementById('wp-btn');
wpbtn.addEventListener('click',function(){
    let wpinput =document.getElementById('wp-input').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+wpinput+'&appid=620274b411dcad88cee64dc1c7f86f17')
    .then(Response => Response.json() )
    .then(data =>{
        let cityname = data.name;
        let tempreture = data.main.temp;
        let temp = tempreture - 273.15;
        let description = data.weather[0].description;

        document.getElementById('city').innerHTML= cityname;
        document.getElementById('temm').innerHTML= temp.toFixed(2);
        document.getElementById('des').innerHTML= description;
    })
    .catch(res => alert("please enter city name correctly"))  

});
