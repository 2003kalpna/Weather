const result = document.getElementById("result");
const error  =document.getElementById("errors");
const city = document.getElementById("city");
const apiKey =  "a333ea03deda44d092f92834240609";
async function getweather(){
    if(!city.value){
        errors.innerHTML ="plese enter a city name"
        result.innerHTML=""
        return;
    }
   
     try{const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}`)
     const data = await response.json();

     if(!response.ok){
        throw new Error("City Not Found");
     }
     console.log(data.current)
     result.innerHTML = 
         `
             <h2> ${data.location.name}, ${data.location.region},${data.location.country}</h2>
             <p> Temeratue:${data.current.temp_c}</P>
             <p> Weather:${data.current.condition.text}</P>
             <p> Humidity:${data.current.humidity}</P>
         `;}

          catch(error){
                    console.log(error)
                    errors.innerHTML=error.message

          }
}