const countries=document.querySelectorAll("path");
const url="https://restcountries.eu/rest/v2";
const buttonEuro=document.querySelector("#buttonEuro");
var countryData;
fetch(url)
        .then(response=>response.json())
        .then(data=>countryData = data)
        .catch(error=>console.log("Error:", error));

function clearCountry(){
  for(let i=0;i<countries.length;i++) {
    if (countries[i].classList.contains("clicked")) 
        countries[i].classList.remove("clicked");
  }
}

function highlightCountry(country){
  var name=country.getAttribute("name");
  clearCountry();
  country.classList.add("clicked");
  document.querySelector("h1").innerText=name;
  document.querySelector("h1").style.visibility="visible";
  for(let i=0;i<countryData.length;i++){
   if(country.id==countryData[i].alpha2Code)
      {
    document.querySelector("h2").innerText="Capital is  "+countryData[i].capital;
    document.querySelector("h2").style.visibility="visible";
                        }
                    }
}

document.addEventListener("click",function(e){
    if(e.target.hasAttribute("d")){
        highlightCountry(e.target);
    }
});

buttonEuro.addEventListener("click",function e(){
  clearCountry();
    for(let i=0;i<countries.length;i++) {
      for(let j=0;j<countryData.length;j++){
        if(countries[i].getAttribute("id")==countryData[j].alpha2Code) {
            if(countryData[j].currencies[0].code=="EUR"){
                countries[i].style.fill="gold";
            }
        }
      }
    }
});