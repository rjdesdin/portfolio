const navLinks = document.querySelectorAll("#socials a");


//For adding behavior when Socials Links are clicked
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.textContent === "Github") {
    } else {
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
  document.body.classList.toggle('light-mode');

  const icon = theme.querySelector('img');

  if (icon.src.includes('sun.png')) {
    icon.src = './media/moon.png';
  } else {
    icon.src = './media/sun.png';
  }
});

const aboutHidden = document.querySelector("#about-me")
const aboutContent = document.querySelector("#about-section")

aboutHidden.addEventListener("click", function(e) {
  console.log(`clicked: ${aboutHidden}`);
  e.preventDefault();
  aboutContent.classList.toggle('hidden');
});