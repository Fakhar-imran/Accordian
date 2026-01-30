let plus= document.querySelector(".plus")
let cross = document.querySelector(".cross")
let hiddenText = document.querySelector(".hiddenText")
let accordian = document.querySelector(".accordian")

plus.onclick = showText
function showText() {
  hiddenText.style.display = "block"
  cross.style.display = "block";
  plus.style.display = "none";  

}
cross.onclick = hideText
function hideText() {
     hiddenText.style.display = "none"
  cross.style.display = "none";
  plus.style.display = "block";
}
