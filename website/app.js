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


// const catchError = (error) => console.error('Some ErrorHas Been =>', error);



/////////////////////////////////////////////////

// document.getElementById('generate').addEventListener('click', onGenerate);
// function onGenerate(e) {
//     const zip = document.getElementById('zip').value;
//     const feelings = document.getElementById('feelings').value;
    
//     getWeather(baseURL,zip,apiKey)
//     .then(function(data){
//        console.log(data);
//      postData('/postData',{date:d, temp:data.list[0].main.temp,content:feelings})
//      updateUI();

//     })

// };

// const getWeather = async(baseURL, zip, apiKey) =>{

//     const r= await fetch(baseURL, zip, apiKey)
//     try{
//         const data= await r.json();
//         return data;
//     }
//     catch(error){
//         console.log('error', error);
//     }
// }


//0
// async function getZipCodeInformation(zipCode) {
//     return await 
//     //const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
//     (await fetch(`${baseURL}?q=${zipCode}&appid=${apiKey}`)).json();
//     // (`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&zip=${zipCode}${apiKey}`)).json()
//   //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99


// }


// async function postDateToServer(data){
//     let response = await fetch(`${baseURL}postData`,{
//         method:'POST',
//         headers:{'Content-Type':'application/json'},
//         body: JSON.stringify(data),

//     });
//     try{
//         if(!response.ok){
//             alert('Process Not Successfuly');
//             return;
//         }
//         response.json().then(data => {
//             if(response.ok)
//             updateUI();
//             else
//             alert('Process Not Successfuly');

//         }).catch(catchError);
//     }catch(error){
//         catchError(error);
//     }
// }

// async function updateUI(){
//     let response = await fetch(`${baseURL}getAll`);
//     try{
//         response.json().then(data =>{
//             dateElement.innerHTML =`Date Is: ${data.data}`;
//             tempElement.innerHTML =`Temp Is: ${data.temp}`;
//             contentElement.innerHTML = `My Feelings Is: ${data.content}`;
//         }).catch(catchError);

//     }catch(error){
//         catchError(error);
//     }
// }
//0

// const postData = async (url = '', data ={})=>{
//     console.log(data);
//     const response=await fetch(url,{
//         method: 'POST',
//         credentials: 'same-origin',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body:JSON.stringify(data)

//     });
//     try{
//         const newDate = await response.json();
//         console.log(newDate);
//         return newDate;

//     }catch(error){
//         console.log("error",error);
    
//     }
// }


// const updateUI= async() =>{
//     const request = await fetch('/getAll');
//     try{
//         const allData =await request.json();
//         document.getElementById('date').innerHTML= `Date:${allData[0].data}`;
//         document.getElementById('temp').innerHTML= `Temeratuer:${allData[0].temp}`;
//         document.getElementById('content').innerHTML= `I feel:${allData[0].content}`;
//     }
//     catch(error){
//         console.log("error",error);
//     }
// }