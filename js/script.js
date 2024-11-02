'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");



// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // Rimuovi la classe 'active' da tutte le pagine e link di navigazione
    pages.forEach(page => page.classList.remove('active'));
    navigationLinks.forEach(link => link.classList.remove('active'));

    // Aggiungi la classe 'active' alla pagina e al link di navigazione cliccato
    const targetPage = this.innerHTML.toLowerCase();
    document.querySelector(`[data-page="${targetPage}"]`).classList.add('active');
    this.classList.add('active');

    // Scorri fino all'inizio della pagina
    window.scrollTo(0, 0);
  });
}
// Funzione per cambiare tema
function changeTheme(theme) {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.style.setProperty('--bg-color', 'hsl(0, 0%, 7%)');
    root.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--primary-color', 'hsl(45, 100%, 72%)');
    root.style.setProperty('--secondary-color', 'hsl(240, 1%, 17%)');
    root.style.setProperty('--border-color', 'hsl(0, 0%, 22%)');
    root.style.setProperty('--shadow-color', 'hsla(0, 0%, 0%, 0.25)');
  } else if (theme === 'blue') {
    root.style.setProperty('--bg-color', 'hsl(210, 36%, 96%)');
    root.style.setProperty('--text-color', 'hsl(210, 22%, 49%)');
    root.style.setProperty('--primary-color', 'hsl(210, 100%, 50%)');
    root.style.setProperty('--secondary-color', 'hsl(210, 22%, 49%)');
    root.style.setProperty('--border-color', 'hsl(210, 22%, 49%)');
    root.style.setProperty('--shadow-color', 'hsla(210, 22%, 49%, 0.25)');
  }
}

// Alterna i temi ogni 3 secondi
let currentTheme = 'dark';
setInterval(() => {
  currentTheme = currentTheme === 'dark' ? 'blue' : 'dark';
  changeTheme(currentTheme);
}, 5000);
