const btnTheme = document.querySelector(".btn-theme");
const searchBtn = document.querySelector(".search-btn");
const inputSearch = document.querySelector(".input-search");
const name = document.querySelector(".name");
const username = document.querySelector(".username");
const textProfile = document.querySelector(".text-profile");
const date = document.querySelector(".date");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const local = document.querySelector(".local");
const link = document.querySelector(".link");
const twitter = document.querySelector(".twitter");
const job = document.querySelector(".job");
const locationUser = document.querySelector("#location-user");
const contact = document.querySelector("#contact-link");
const contactTwitter = document.querySelector("#contact-twitter");
const company = document.querySelector("#company");
const img = document.querySelector(".img");

document.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    searchBtn.click()
  }
});

searchBtn.addEventListener('click', function () {
  const url = `https://api.github.com/users/${inputSearch.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);
    const dateBr = dateData.split("-").reverse().join(" ");
    console.log(data );
    img.src = data.avatar_url;

    name.innerHTML = data.name;
    username.innerHTML = `@${data.login}`;
    textProfile.innerHTML = data.bio; // ajustar max-whidth

    date.innerHTML = `Usuario desde: ${dateBr}`;

    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;

    local.innerHTML = data.location;
    link.innerHTML = data.blog;
    twitter.innerHTML = data.twitter_username;
    job.innerHTML = data.company;

    if(data.company == null){
      job.innerHTML = 'Não atribuído';
      company.style.color = '#434242';
    }
    if(data.location == null){
      local.innerHTML = 'Não atribuído';
      locationUser.style.color = '#434242';
    }
    if(data.blog == null || data.blog == "" ){
      link.innerHTML = 'Não atribuído';
      contact.style.color = '#434242';
    }
    if(data.twitter_username == null){
      twitter.innerHTML = 'Não atribuído';
      contactTwitter.style.color = '#434242';
    }
  }
  getUrl();
});


