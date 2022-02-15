const menuIcon = document.querySelector(".menu__icon");
const formError = document.querySelector(".form-options__error");
const form = document.querySelector("#form");
const formInputs = document.querySelectorAll(".js-input");
const inputInn = document.querySelector(".js-input-inn");
const inputCheck = document.querySelector(".js-input-checkbox");
const inputResident = document.querySelectorAll(".js-options__radio");
const submitBtn = document.querySelector(".resident-form__btn");
const selectForm = document.querySelectorAll('.resident-form__select');

form.addEventListener("submit", function (e) {
  let hasError = false;
  function innValidate(inn) {
    return /\d{12}/.test(inn);
  }

  let emptyInput = Array.from(formInputs).filter(
    (input) => input.value === "" && !input.disabled
  );

  if (!inputInn.disabled) {
    let innVal = inputInn.value;
    if (!innValidate(innVal)) {
      inputInn.classList.add("error");
      hasError = true;
    } else {
      inputInn.classList.remove("error");
    }
  }

  if (emptyInput.length !== 0) {
    return false;
  }
  if (hasError) {
    e.preventDefault();
  }
});

inputCheck.addEventListener("change", function () {
  inputInn.disabled = this.checked;
});

inputResident.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.getAttribute("value") === "resYes") {
      formError.classList.add("active");
      inputCheck.disabled = true;
      submitBtn.disabled = true;
      inputInn.disabled = true;
      formInputs.disabled = true;
    } else if (
      this.getAttribute("value") === "resNo" &&
      inputCheck.checked === true
    ) {
      inputCheck.disabled = false;
      submitBtn.disabled = false;
      formError.classList.remove("active");
    } else if (this.getAttribute("value") === "resNo") {
      inputCheck.disabled = false;
      formError.classList.remove("active");
      inputInn.disabled = false;
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = false;
    }
  });
});



if (menuIcon) {
  const menuBody = document.querySelector('.menu-body');
  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
  })
}


selectForm.forEach((select) => {
  select.addEventListener('click', function () {
    this.closest('.select-wrap').classList.toggle('active');
  })

});


