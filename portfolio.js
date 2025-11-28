const sortUl = document.querySelector(".sort");
const ulCards = document.querySelector(".picturesProjects");
const basicContentCards = ulCards.innerHTML;
const arrayLiscards = basicContentCards.split("</li>");
const goodLis = arrayLiscards.join("</li>");
const optionsViewButton = document.querySelectorAll(".optionsView");

const funcCheck = (checkWord) => {
  let toInner = [];
  arrayLiscards.forEach((li) => {
    const spaceGap = li.split('<span class="types">');
    // console.log(spaceGap);
    if (spaceGap[1] === `${checkWord}</span>\n            `) {
      toInner.push(li);
    }
  });
  ulCards.innerHTML = toInner.join("</li>");
};

const buttonBlue = (btnAddNum) => {
  optionsViewButton.forEach(btn => {
    btn.classList.remove('optionViewSelected');
  });

  optionsViewButton[btnAddNum].classList.add('optionViewSelected');
};

sortUl.addEventListener("click", (event) => {
  const targetClick = event.target;

  if (event.target.classList.contains("btn1")) {
    ulCards.innerHTML = goodLis;
    buttonBlue(0);
  } else if (event.target.classList.contains("btn2")) {
    funcCheck("Веб-сайт");
        buttonBlue(1);
  } else if (event.target.classList.contains("btn3")) {
    funcCheck("Додаток");
        buttonBlue(2);
  } else if (event.target.classList.contains("btn4")) {
    funcCheck(event.target.textContent);
        buttonBlue(3);
  } else if (event.target.classList.contains("btn5")) {
    funcCheck(event.target.textContent);
        buttonBlue(4);
  }
});


const closeBurgerBtn = document.querySelector('.closeBurgerBtn');
const burgerBtnOpen = document.querySelector('.burgerBtn');
const burgerMenu = document.querySelector('.burgerMenu');
const contactsBurger = document.querySelector('.contactsBurger');
const portfolioBurger = document.querySelector('.portfolioBurger');


burgerBtnOpen.addEventListener('click', event => {
  burgerMenu.style.display = 'block';
});

closeBurgerBtn.addEventListener('click', event => {
    burgerMenu.style.display = 'none';
});

contactsBurger.addEventListener('click', event => {
      burgerMenu.style.display = 'none';
});

portfolioBurger.addEventListener('click', event => {
  burgerBtnOpen.style.display = 'block';
});


const formFoot = document.querySelector(".formFoot");
const inpFoot = document.querySelector(".emailFootInp");
const entredWrong = document.querySelector(".entredWrong");

formFoot.addEventListener("submit", (event) => {
  
  if (
    inpFoot.value.length < 6 ||
    !inpFoot.value.includes("@") ||
    !inpFoot.value.includes(".com")
  ) {
    event.preventDefault();
    entredWrong.style.display = "block";
  } else {
    entredWrong.style.display = "none";
  }
});