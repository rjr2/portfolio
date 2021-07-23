var welcButton = document.getElementById("welc");
var portButton = document.getElementById("port");
var ContButton = document.getElementById("cont");
//article variables
var welcome = document.getElementById("welcome");
var portfolio = document.getElementById("portfolio");
var contactMe = document.getElementById("contactme");

function showWelcome() {
  if (welcome.style.display = "none") {
    welcome.style.display = "block";
    portfolio.style.display = "none";
    contactMe.style.display = "none";
   }
}

function showPortfolio() {
  if (portfolio.style.display = "none") {
    portfolio.style.display = "block";
    contactMe.style.display = "none";
    welcome.style.display = "none";
    }
}

function showContactMe() {
    if (contactMe.style.display = "none") {
        contactMe.style.display = "block";
        portfolio.style.display = "none";
        welcome.style.display = "none";
     }
}

showWelcome();

welcButton.addEventListener("click", showWelcome);
portButton.addEventListener("click", showPortfolio);
ContButton.addEventListener("click", showContactMe);

