let accordians = document.querySelectorAll(".accordian");

accordians.forEach((acc) => {
  acc.addEventListener("click", () => {

    let hiddenText = acc.nextElementSibling;

    let plus = acc.querySelector(".plus");
    let cross = acc.querySelector(".cross");

    hiddenText.classList.toggle("active");

    if (hiddenText.classList.contains("active")) {
      plus.style.display = "none";
      cross.style.display = "block";
    } else {
      plus.style.display = "block";
      cross.style.display = "none";
    }

  });

});
