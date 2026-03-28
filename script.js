const navLinks = document.querySelectorAll("#socials a");


//For adding behavior when Socials Links are clicked
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(`Clicked: ${this.textContent}`);
    if (link.textContent === "Github") {
      console.log(`Clicked: Github`);
    } else {
      console.log(`Clicked: PlaceHolder`);
      e.preventDefault();
    }
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });
    this.classList.add("active");
  });
});


//Theme toggle
const theme =  document.querySelector("#theme-toggle")

theme.addEventListener("click", function(e) {
  console.log(`theme = ${theme}`)
  console.log(`---THEME TOGGLE CLICKED---`);
  document.body.classList.toggle('light-mode');
});