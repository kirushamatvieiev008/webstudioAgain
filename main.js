const inpsModal = Array.from(document.querySelectorAll(".inpsModal"));
const svgsModal = document.querySelector(".svgsModal");
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

console.log(inpsModal);

openModal.addEventListener("click", (event) => {
  blurBlock.style.display = "block";
  modalWindow.style.display = "block";
  document.body.style.overflow = "hidden";
});

forjs1.addEventListener("focus", (event) => {
  svgsModal.style.color = "#2196F3";
  //   svgEmail.style.color = "#2196F3";
});

forjs1.addEventListener("blur", (event) => {
  svgsModal.style.color = "#212121";
  //   svgPhone.style.color = "#212121";
  //   svgEmail.style.color = "#212121";
});

forjs2.addEventListener("focus", (event) => {
  svgPhone.style.color = "#2196F3";
});

forjs2.addEventListener("blur", (event) => {
  svgPhone.style.color = "#212121";
});

forjs3.addEventListener("focus", (event) => {
  svgEmail.style.color = "#2196F3";
});

forjs3.addEventListener("blur", (event) => {
  svgEmail.style.color = "#212121";
});

closeModalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // closeModalBtn.style.dislay = 'none';
  blurBlock.style.display = "none";
  modalWindow.style.display = "none";
  document.body.style.overflow = "visible";
  notificationbeware.style.display = "none";
  lastCheck.style.display = "none";
});

// formModal.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // console.log(forjs3.value);

//   // if ()
//   modalWindow.style.display = "none";
//   blurBlock.style.display = "none";
//   document.body.style.overflow = "visible";
// });

checkboxModal.addEventListener("click", (event) => {
  if (checkboxModal.checked === true) {
    // const flexModalContent = flexModal.innerHTML;
    if (
      forjs3.value === "" ||
      forjs2.value === "" ||
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
  event.preventDefault();
  // console.log(forjs3.value);

  if (checkboxModal.checked === false) {
    lastCheck.style.display = "block";
  } else {
    modalWindow.style.display = "none";
    blurBlock.style.display = "none";
    document.body.style.overflow = "visible";
    inpsModal.forEach((inp) => {
      inp.value = "";
    });
    stayComment.value = "";
    lastCheck.style.display = "none";
    checkboxModal.checked = false;
  }
});

// picturesProjectsUl.addEventListener('click', event => {
//   if (event.target.classList.contains('liPictureProjects1')) {

//   }
// });

// const optionsView = document.querySelectorAll('.optionsView');

// optionsView.forEach(btn => {
//   btn.addEventListener('click', event => {
//     event.preventDefault();

//   })
// })

const closeBurgerBtn = document.querySelector(".closeBurgerBtn");
const burgerBtnOpen = document.querySelector(".burgerBtn");
const burgerMenu = document.querySelector(".burgerMenu");
const contactsBurger = document.querySelector(".contactsBurger");
const studioBurger = document.querySelector(".studioBurger");

burgerBtnOpen.addEventListener("click", (event) => {
  burgerMenu.style.display = "block";
});

closeBurgerBtn.addEventListener("click", (event) => {
  burgerMenu.style.display = "none";
});

contactsBurger.addEventListener("click", (event) => {
  burgerMenu.style.display = "none";
});

studioBurger.addEventListener("click", (event) => {
  burgerBtnOpen.style.display = "block";
});

const entredWrong = document.querySelector(".entredWrong");
const formFoot = document.querySelector(".formFoot");
const emailFootInp = document.querySelector(".emailFootInp");

formFoot.addEventListener('submit', event => {
  event.preventDefault();
  console.log(emailFootInp.value);
  
  
  if (!emailFootInp.value.includes('@')) {
    entredWrong.style.display = 'block';
    
  } else {
        entredWrong.style.display = 'none';
  }
})