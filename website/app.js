// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// /* Global Variables */
const generate = document.getElementById('generate');
generate.addEventListener('click', async()=> {

    try{
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    
    // Personal API Key for OpenWeatherMap API
    const apiKey = '9e60108a4b31029dd79e7d2422b25efe&units=imperial';
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

    const response = await fetch(baseURL).then(res => res.json());
    //console.log(response);
    const temp = await response.main.temp;
    console.log(temp);
    //

    await fetch('/addWeather',{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            newDate, temp,feelings
        })
    });

    const result = await fetch('/getWeather').then(res => res.json());
     document.getElementById('date').innerHTML=result.date;
     document.getElementById('temp').innerHTML=result.temp;
     document.getElementById('content').innerHTML=result.feelings;
    }
    catch(error){
        console.log('Error!!!!',error);
    }
});



//////////////////////////////////////////////////////////
