

function card1(){

    document.getElementById("body").style.backgroundImage = "url('http://love-img.com/wp-content/uploads/2017/11/3328.jpg')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
    console.log("card1")
    weather("Riyadh")
    document.getElementById("h1").style.display = "block";
    document.getElementById("h11").style.display = "block";
    document.getElementById("text").style.display="block";
    document.getElementById("text").style.color="rgb(212, 209, 212);";
    document.getElementById("h3").style.display="none";
    document.getElementById("vision").style.display="none";

    let x= document.getElementById("card3").getAttribute("data-test")
   
}

function card2(){

    document.getElementById("body").style.backgroundImage = "url('https://www.visitsaudi.com/content/dam/saudi-tourism/media/red-sea-route-/rsr-landing-and-detail-pages/explore-al-soudah/1920x810_Explore.png')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
    weather("Abha")
    document.getElementById("h1").style.display = "block";
    document.getElementById("h11").style.display = "block";
    document.getElementById("text").style.display="block";
    document.getElementById("text").style.color="black";
    document.getElementById("h3").style.display="none";
    document.getElementById("vision").style.display="none";

    let x= document.getElementById("card3").getAttribute("data-test")

}

function card3(){

    document.getElementById("body").style.backgroundImage = "url('https://www.kaust.edu.sa/PublishingImages/news/shutterstock_1138145489%20(1).jpg?renditionId=16')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
    weather("Jeddah")
    document.getElementById("h1").style.display = "block";
    document.getElementById("h11").style.display = "block";
    document.getElementById("text").style.display="block";
    document.getElementById("text").style.color="rgb(212, 209, 212);";
    document.getElementById("h3").style.display="none";
    document.getElementById("vision").style.display="none";


    let x= document.getElementById("card3").getAttribute("data-test")
    
}


function weather(city){
 
 fetch("https://community-open-weather-map.p.rapidapi.com/climate/month?q="+`${city}`,{
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "de3da41503msh12b52ab0ede66bfp1c6e13jsn8c720920ffb5" 
  }
})
.then(function(serverPromise){
  serverPromise.json()
   .then(function(j) {
    console.log(j);
    
        console.log(j.list[0].humidity);
        let weather =document.getElementById("weather");
        let list = document.createElement("DIV");
        let p = document.getElementById("humidity");
        let p2 = document.getElementById("temp");
        p.className="p"
        p.innerText=j.list[0].humidity;
        p2.innerText=j.list[0].temp.average;
        weather.appendChild(list)
        h1.document.style.display=block;
    
        
   })
   .catch(function(e){
    console.log(e);
   
   });
 })
 .catch(function(e){
   console.log(e);
  })}