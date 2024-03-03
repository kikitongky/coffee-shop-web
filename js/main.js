// Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// FILTER CARD

const categoryLink = document.querySelectorAll('.product__item');

// Active Product

function activeProduct(){
    categoryLink.forEach(a => a.classList.remove('active__product'))
    this.classList.add('active__product')
}

categoryLink.forEach(a => a.addEventListener('click', activeProduct))


// showing card with filter
categoryLink.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const selectedCategory = this.getAttribute('data-category');

        filtersCardByCategory(selectedCategory);
    })
})

// card by category

function filtersCardByCategory(category){
    const cards = document.querySelectorAll('.product__card');

    cards.forEach(card => {

        if(category === 'all' || card.classList.contains(category)){
            card.style.display = 'block';
        }else{
            card.style.display = 'none';
        }
    })
};