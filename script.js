const correctPassword = "LeeithPlots93";

const sites = [
  { name: "Gamesite69", url: "https://hammy-dotco.github.io/gamesite69/" },
  { name: "Eli.Costa.Site", url: "https://hammy-dotco.github.io/Eli.costa.site/" },
  { name: "Infinite Craft", url: "https://unfiltering.github.io/infinite-craft/" },
  { name: "Soccer Random", url: "https://tristan-dez.github.io/Jamesgames/projects/soccer-random/frame.html" },
  { name: "Pepsi_Man", url: "https://lebro29.github.io/learnaboutjetpacks/"},
  { name: "Just Study", url: "https://juststudy-ce.github.io/"},
  { name: "Science Games", url: "https://scienceclassess.github.io/scienceisgreat22eliisnotallowed/"},
  { name: "Granny", url: "https://sites.google.com/classrooms.management/view/granny"},
 { name: "HTML5 Games", url: "https://tommalbran.github.io/games/"},
 { name: "Nettleweb", url: ""},
  { name: "Cluster Rush", url: "https://lebro29.github.io/1v1lolbutnotreally/"},
  { name: "Mario", url: "https://mario.js.jeremiahkellick.com/"},
];

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMessage");
  const loginBox = document.getElementById("loginBox");
  const mainContent = document.getElementById("mainContent");

  if (input === correctPassword) {
    loginBox.classList.add("hidden");
    mainContent.classList.remove("hidden");
    errorMsg.textContent = "";
    renderSites();
  } else {
    errorMsg.textContent = "❌ Incorrect password. Try again.";
  }
}

function renderSites() {
  const container = document.getElementById("siteButtons");
  container.innerHTML = "";
  sites.forEach(site => {
    const btn = document.createElement("button");
    btn.textContent = site.name;
    btn.onclick = () => {
      let w = window.open("about:blank");
      w.location = site.url;
    };
    container.appendChild(btn);
  });
}

window.onload = () => {
  document.getElementById("passwordInput").focus();
};
