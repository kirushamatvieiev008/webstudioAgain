const inpsModal = document.querySelector(".inpsModal");
const svgsModal = document.querySelector(".svgsModal");
const svgEmail = document.querySelector(".svgEmail");
const svgPhone = document.querySelector(".svgPhone");
const forjs1 = document.querySelector('.forjs1');
const forjs2 = document.querySelector('.forjs2');
const forjs3 = document.querySelector('.forjs3');
const closeModalBtn = document.querySelector('.svgModal');
const blurBlock = document.querySelector('.blur');
const modalWindow = document.querySelector('.modalWindow');
const openModal = document.querySelector('.contactsBtn');
const formModal = document.querySelector('.formModal');
const checkboxModal = document.querySelector('.checkboxModal');

openModal.addEventListener('click', event => {
    blurBlock.style.display = 'block';
    modalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';
})


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

closeModalBtn.addEventListener('click', event => {
    event.preventDefault()
    // closeModalBtn.style.dislay = 'none';
    blurBlock.style.display = 'none';
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'visible';
})


formModal.addEventListener('submit', event => {
  event.preventDefault();
  console.log(checkboxModal.value);
  
  if (checkboxModal.value)
  

  // if ()
  modalWindow.style.display = 'none';
  blurBlock.style.display = 'none';
  document.body.style.overflow = 'visible';
})