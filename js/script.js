const btnTheme = document.querySelector(".btn-theme");
const searchBtn = document.querySelector(".search-btn");
const inputSearch = document.querySelector(".input-search");

const name = document.querySelector(".name");
const username = document.querySelector(".username");
const textProfile = document.querySelector(".text-profile");
const date = document.querySelector(".date");
const repos = document.querySelector(".rapos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const local = document.querySelector(".local");
const link = document.querySelector(".link");
const twitter = document.querySelector(".twitter");
const job = document.querySelector(".job");

let img = document.createElement("img");
let imgMain = document.querySelector(".img-main");

searchBtn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${inputSearch.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();



    img.src = data.avatar_url;
    imgMain.appendChild(img);
    
    name.innerHTML = data.name;
    username.innerHTML = `@${data.login}`;
    textProfile.innerHTML = data.bio;// ajustar max-whidth

   }
  getUrl();
});

