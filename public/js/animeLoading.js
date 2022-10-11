// Get page elements
var Anime1 = document.getElementById("Anime1");
var Anime2 = document.getElementById("Anime2");

var containerAnime = document.getElementById("containerAnime");
var titleAnime = document.getElementsByClassName("titleAnime")[0];
var detailAnime = document.getElementsByClassName("detailAnime")[0];
var synopsisAnime = document.getElementById("synopsisAnime");

Anime1.addEventListener("click", () => animeGet(1));
Anime2.addEventListener("click", () => animeGet(2));

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

    containerAnime.style.display = "block";
}

function changeImage(i){
  if(i==1){
    document.body.style.backgroundImage = "url('/image/background1.webp')";
  }
  else{
    document.body.style.backgroundImage = "url('/image/background.webp')";
  }
}
