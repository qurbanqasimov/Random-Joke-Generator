const btn = document.querySelector(".btn")
const cont  = document.querySelector(".text")
const apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

function getJoke(){
  cont.classList.remove("fade");

  fetch(apiUrl)
  .then(api => api.json())
  .then(data=> {
      cont.textContent = `${data.joke}` 
      cont.classList.add("fade");

  })
}

btn.addEventListener("click", getJoke)
getJoke()