/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/// the navigation scroll into section 
// build the nav


document.addEventListener('DOMContentLoaded', function () {
let all__sections = document.querySelectorAll('section');
let ul = document.querySelector('ul');
all__sections.forEach(function(item, index ){
let nav = item.getAttribute('data-nav');
const li = document.createElement('li');
const link = document.createElement('a');
const text = document.createTextNode(nav);
const fragment = document.createDocumentFragment();
link.appendChild(text);
li.appendChild(link);
fragment.appendChild(li);
ul.appendChild(fragment);

});


//Event listener 

ul.addEventListener("click",()=>{
	const el = document.getElementById(event.target.textContent);
	el.scrollIntoView({behavior :"smooth"});
});






// build the nav

const navSlide=()=>{
	const bar =document.className('.bar');
	const nav =document.className('.nav_links');	
}

// add Event listener
//toggle nav
bar.addEventListener('click',()=>{
	nav.classList.toggle('active');
	
});

navSlide();

// animate links 

navLinks.forEach((link,index)=>{
	link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`
});