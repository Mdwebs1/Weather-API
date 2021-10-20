

function card1(){

    document.getElementById("body").style.backgroundImage = "url('http://love-img.com/wp-content/uploads/2017/11/3328.jpg')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "cover";
    // document.getElementById("weather").style.display="block";
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
    const d = new Date();
    let thisDay= d.getDate(); 
 
        console.log(j.list[thisDay-1].humidity);
        let weather =document.getElementById("weather");
        let list = document.createElement("DIV");
        let p = document.getElementById("humidity");
        let p2 = document.getElementById("temp");
        p.className="p"
        p.innerText=j.list[thisDay-1].humidity;
        p2.innerText=j.list[thisDay-1].temp.average;
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




  var button = document.querySelector(".button");
  var inputValue =document.querySelector(".inputValue");

 button.addEventListener("click",function(){
  var name1 =document.querySelector(".name1");
  var temp1=document.querySelector(".temp1");
  var decs=document.querySelector(".desc");
  fetch("https://community-open-weather-map.p.rapidapi.com/climate/month?q="+`${inputValue.value}`,{
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "de3da41503msh12b52ab0ede66bfp1c6e13jsn8c720920ffb5" 
    }
  })
  
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      const d = new Date();
      let thisDay= d.getDate();
      // var nameValue = "Welcome to "+data.city.name;
      var tempValue = "The Temperature Is "+data.list[thisDay-1].temp.average;
      var decsValue = "The City is "+data.city.name +", "+"Located In " +data.city.country ;
      console.log(decsValue);
     
     
      temp1.innerText=tempValue;
      decs.innerText=decsValue;
      // name1.innerText=nameValue;
    })

  .catch(err =>alert("Wronng City Name"))
 })



$(".post-wrapper").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



