// Get page elements
var Anime1 = document.getElementById("Anime1");
var Anime2 = document.getElementById("Anime2");
var Anime3 = document.getElementById("Anime3");
var Anime4 = document.getElementById("Anime4");
var Anime5 = document.getElementById("Anime5");
var Anime6 = document.getElementById("Anime6");
var Anime7 = document.getElementById("Anime7");

var containerAnime = document.getElementById("containerAnime");
var titleAnime = document.getElementsByClassName("titleAnime")[0];
var detailAnime = document.getElementsByClassName("detailAnime")[0];
var synopsisAnime = document.getElementById("synopsisAnime");

Anime1.addEventListener("click", () => animeGet(1));
Anime2.addEventListener("click", () => animeGet(2));
Anime3.addEventListener("click", () => animeGet(3));
Anime4.addEventListener("click", () => animeGet(4));
Anime5.addEventListener("click", () => animeGet(5));
Anime6.addEventListener("click", () => animeGet(6));
Anime7.addEventListener("click", () => animeGet(7));



function animeGet(i) {
  fetch(`/api/animeGet/${i}`)
    .then((response) => {
      if (!response.ok) {
        console.log("Error !");
        titleAnime.innerText = "Error !";
      } else {
        return response.json();
      }
    })
    .then((data) => { 
      titleAnime.innerText = data.title;
      detailAnime.innerText = `Studio : ${data.studio} --- Date : ${data.date} --- Episodes : ${data.episode}`;
      synopsisAnime.innerHTML = `Synopsis : <br/> ${data.synopsis}`;
      changeImage(i);
    });

    if(getComputedStyle(containerAnime).display != "none"){
      containerAnime.style.display = "none";
    } else {
      containerAnime.style.display = "block";
    }
}



function changeImage(i){
  switch(i){
    case 1:
      return document.body.style.backgroundImage = "url('/image/background1.webp')";
      break;
    case 2:
      return document.body.style.backgroundImage = "url('/image/background.webp')";
      break;
    case 3:
      return document.body.style.backgroundImage = "url('/image/background3.webp')";
        break;
     case 4:
        return document.body.style.backgroundImage = "url('/image/background4.webp')";
         break;
      case 5:
        return document.body.style.backgroundImage = "url('/image/background5.webp')";
         break;
      case 6:
        return document.body.style.backgroundImage = "url('/image/background6.webp')";
        break;
      case 7:
        return document.body.style.backgroundImage = "url('/image/background7.webp')";
        break;
    
  }
}
