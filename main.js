const inpsModal = Array.from(document.querySelectorAll(".inpsModal"));
const svgsModal = document.querySelectorAll(".svgsModal");
const svgName = document.querySelector(".svgName");
const svgEmail = document.querySelector(".svgEmail");
const svgPhone = document.querySelector(".svgPhone");
const forjs1 = document.querySelector(".forjs1");
const forjs2 = document.querySelector(".forjs2");
const forjs3 = document.querySelector(".forjs3");
const closeModalBtn = document.querySelector(".svgModal");
const blurBlock = document.querySelector(".blur");
const modalWindow = document.querySelector(".modalWindow");
const openModal = document.querySelector(".takeOrder");
const formModal = document.querySelector(".formModal");
const checkboxModal = document.querySelector(".checkboxModal");
const flexModal = document.querySelector(".flexModal");
const stayComment = document.querySelector(".stayComment");
const notificationbeware = document.querySelector(".notificationbeware");
const lastCheck = document.querySelector(".lastCheck");
const picturesProjectsUl = document.querySelector(".picturesProjects");

openModal.addEventListener("click", (event) => {
  blurBlock.style.display = "block";
  modalWindow.style.display = "block";
  document.body.style.overflow = "hidden";
});

const funcChangeColorsvg = (bluSvg) => {
  svgsModal.forEach((svg) => {
    svg.style.color = "#212121";
  });
  bluSvg.style.color = "#2196F3";
};

modalWindow.addEventListener("click", (event) => {

  if (event.target.classList[1] === "forjs1") {
    funcChangeColorsvg(svgName);
  } else if (event.target.classList[1] === "forjs2") {
    funcChangeColorsvg(svgPhone);
  } else if (event.target.classList[1] === "forjs3") {
    funcChangeColorsvg(svgEmail);
  } else {
    svgsModal.forEach((svg) => {
      svg.style.color = "#212121";
    });
  }
});

closeModalBtn.addEventListener("click", (event) => {
  blurBlock.style.display = "none";
  modalWindow.style.display = "none";
  document.body.style.overflow = "visible";
  notificationbeware.style.display = "none";
  lastCheck.style.display = "none";
  inpsModal.forEach((inp) => {
    inp.value = "";
  });
  stayComment.value = "";
});

checkboxModal.addEventListener("click", (event) => {
  if (checkboxModal.checked === true) {
    if (
      forjs3.value === "" ||
      !forjs3.value.includes === "@" ||
      !forjs3.value.includes === ".com" ||
      forjs2.value.length < 10 ||
      forjs1.value === "" ||
      stayComment.value === ""
    ) {
      notificationbeware.style.display = "block";
      checkboxModal.checked = false;
    } else {
      notificationbeware.style.display = "none";
    }
  }
});

formModal.addEventListener("submit", (event) => {
  if (checkboxModal.checked === false) {
    lastCheck.style.display = "block";
    event.preventDefault();
  } else {
    modalWindow.style.display = "none";
    blurBlock.style.display = "none";
    document.body.style.overflow = "visible";
  }
});

const closeBurgerBtn = document.querySelector(".closeBurgerBtn");
const burgerBtnOpen = document.querySelector(".burgerBtn");
const burgerMenu = document.querySelector(".burgerMenu");
const contactsBurger = document.querySelector(".contactsBurger");
const studioBurger = document.querySelector(".studioBurger");

burgerBtnOpen.addEventListener("click", (event) => {
  burgerMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBurgerBtn.addEventListener("click", (event) => {
  burgerMenu.style.display = "none";
  document.body.style.overflow = "visible";
});

contactsBurger.addEventListener("click", (event) => {
  burgerMenu.style.display = "none";
});

studioBurger.addEventListener("click", (event) => {
  burgerBtnOpen.style.display = "block";
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
