
let iconeTel = document.getElementById("telephoneIsNotVisible");
let numberTel = document.getElementById("visibleTelephoneOrNot");
let mail = document.getElementById("iconeMail");

if (window.matchMedia("(min-width: 768px)").matches) {
  	iconeTel.addEventListener("click", () => {
  	iconeTel.style.display = "none";
  	numberTel.style.display = "block";
  	mail.style.marginLeft = "50%";
  })
  numberTel.addEventListener("click", () => {
  	numberTel.style.display = "none";
  	iconeTel.style.display = "block";
  	mail.style.marginLeft = "0";
  })
}













