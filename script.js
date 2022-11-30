
function fetchData(){
  
    var inputLocation =document.getElementById('loc').value;
    var accessKey=document.getElementById('key').value;

    if(inputLocation==='')
    {
        alert('Location or API key cannot be empty!')

    }

//     else
//     {
//     var accessKey  =document.getElementById('key');
//     accessKey.value="b4c9c53945a0a7a0c879c8618d05a74d";
//     }
     
  
  
    let url = "http://api.weatherstack.com/current?access_key="+accessKey+"&query="+inputLocation;

    fetch(url)
        .then(a=>a.json())

        // .then(response=>{
            
            // document.getElementById("table-body").innerHTML= 
            // "<tr>Location: "+response.location.country +"<tr>Lat: "+response.location.lat+
            // "<tr>Long: "+response.location.lon+"<tr>Timezone: "+response.location.timezone_id+
            // "<tr>Wind Speed: "+response.current.wind_speed+
            // "<tr>Pressure: "+response.current.pressure +"<tr>Humidity: "+response.current.humidity+
            // "<tr>Wind Direction: "+response.current.wind_dir+
            // "<tr>UV Index: "+response.current.uv_index+
            // "<tr>Feels Like: "+response.current.feelslike;

            .then(response => {
                console.log(response)
               APIData=response;
            //    console.log("data is", APIData);

            document.getElementById('Location').innerText=response.location.country;
            document.getElementById('Lat').innerText=response.location.lat;
            document.getElementById('Long').innerText=response.location.lon;
            document.getElementById('Timezone').innerText=response.location.timezone_id;
            document.getElementById('WindSpeed').innerText=response.current.wind_speed;
            document.getElementById('Pressure').innerText=response.current.pressure;
            document.getElementById('Humidity').innerText=response.current.humidity;
            document.getElementById('WindDirection').innerText=response.current.wind_dir;
            document.getElementById('UVIndex').innerText=response.current.uv_index;
            document.getElementById('FeelsLike').innerText=response.current.feelslike;
       

        });
      

 }
       
       

