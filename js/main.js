// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle-menu"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

/*===== Cart =====*/

const cart = document.querySelector(".cart");

const cartToggle = document
  .querySelector(".nav__toggle-cart")
  .addEventListener("click", () => {
    cart.classList.add("show-menu");
  });

const cartToggleLi = document
  .querySelector(".nav__toggle-cart-li")
  .addEventListener("click", () => {
    cart.classList.add("show-menu");
  });

const cartClose = document
  .querySelector(".cart__close")
  .addEventListener("click", () => {
    cart.classList.remove("show-menu");
  });

/*===== REMOVE MENU MOBILE =====*/
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// === SCROLL UP ===== \\
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

//=========  FILTER CARD by categori   ============\\

const categoryLinks = document.querySelectorAll(".product__item");

function activeProduct() {
  categoryLinks.forEach((link) => link.classList.remove("active__product"));
  this.classList.add("active__product");
}
function filtersCardByCategory(category) {
  const cards = document.querySelectorAll(".product__card");

  cards.forEach((card) => {
    card.style.display =
      category === "all" || card.classList.contains(category)
        ? "block"
        : "none";
  });
}

categoryLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCategory = this.getAttribute("data-category");
    activeProduct.call(this);
    filtersCardByCategory(selectedCategory);
  });
});

// ========= ACTIVE LINK ======

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*="' + sectionId + '"]'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
  if (
    scrollDown + window.innerHeight >=
    document.body.offsetHeight - footer.offsetHeight
  ) {
    document
      .querySelector('.nav__menu a[href="#footer"]')
      .classList.add("active-link");
  } else {
    document
      .querySelector('.nav__menu a[href="#footer"]')
      .classList.remove("active-link");
  }
};
window.addEventListener("scroll", scrollActive);
