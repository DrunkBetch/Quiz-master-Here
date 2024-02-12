//Selections
const links = document.querySelectorAll(".link");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo_img");
const btnLearn = document.querySelector(".learn_more");
const sectionDetails = document.querySelector(".section_details");
const btnAbout = document.querySelector(".btn--about");
const sectionAbout = document.querySelector(".section_about");
// nav.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("link")) {
//     const target = e.target;
//     links.forEach((el) => (el.opacity = 0));
//     logo.opacity = 0;
//     console.log("hi");
//     target.opacity = 1;
//   }
// });

btnLearn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(sectionDetails);
  sectionDetails.scrollIntoView({ behavior: "smooth" });
});

btnAbout.addEventListener("click", function (e) {
  e.preventDefault();
  sectionAbout.scrollIntoView({ behavior: "smooth" });
});
function closeform() {
  document.getElementById("myoverlay").style.display = "none";
}
function openForm() {
  document.getElementById("myoverlay").style.display = "block";
}
const loginBtn = document.querySelector(".btn--login");
loginBtn.addEventListener("click", openForm);
