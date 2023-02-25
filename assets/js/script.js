'use strict';

const images = 
{
  "favicon": "./data/images/favicon.JPG",
  "userImg": "./data/images/user_img.jfif",
}
const myObj = 
{
  "name": "Manny Khoshbin",
  "title": "Real estate entrepreneur",
  "email": "press@mannykhoshbin.com",
  "aboutTitle": "",
  "about-text": `
  Manny arrived in the United States from Iran in 1985 at the age of 14.   Manny spoke no English, had no friends, and knew almost nothing about America.  During his early years in the U.S., Manny was faced with many challenges - but he decided at a young age that he would not let his disadvantages hold him back.
   
  <br> While in high school, Manny started selling used goods at swap meets on the weekends to make a few bucks.  At age 16, he was finally old enough to get a 'real job' and found a position as a cart pusher at Kmart in Costa Mesa, Ca that paid just $3.15 per hour.
  ​
  <br><br> Manny knew he wanted more than just a salary, so he started looking for other job opportunities and found a multi-level marketing firm selling bags of nuts and candies door-to-door. Manny applied for the job and in his first two months become the highest earning salesman in the company.  One day, while shopping at Price Club (now Costco) with his father, Manny realized all the goods he was selling were sold in bulk for much cheaper than what his employer was charging him... and his first business was born.  He was just 18, and still in high school, but Manny leased a small office and purchased a full pallet of nuts and candies along with polyester bags, labels, a scale, and a sealer. 
  ​
  <br><br> Manny sold his nuts and candies to auto retail and service centers and did very well – until he realized (by notice from health department) he needed to have an approved facility for packaging food products.  He was forced to shutdown.  While disappointed to close the doors on his first business, Manny knew he was an entrepreneur at heart.  It was only a matter of time before he found his next venture.
  ​
  <br><br> In 1991, at age 20, he was approached by one his dad's friends, a real estate broker, about purchasing a Mobile gas station.  Manny was told he could purchase the station with just a 10% down payment - he jumped at the opportunity!  Manny invested all of his savings and became a Mobile dealer, passing all the requirements, and even getting his Smog License.   Unfortunately, the loan company offering the low down payment funding turned out to be a scam.  Manny lost his entire savings and was unable to go through with the gas station purchase.
  ​
  <br> With no money and no job, Manny obtained his real estate license in 1992.  He began working for a mortgage company as a loan officer.  Within 6 months, he broke out on his own and started his only mortgage and realty company so that he could invest in distressed and bank-owned properties. The rest was history.  
  ​
  <br><br> Nearly three decades later, Manny is the President and CEO of The Khoshbin Company, a private real estate firm with holdings across the country.  
  ​
  <br> Today, Manny is focused on guiding young entrepreneurs and investors on their journey to build wealth and secure their financial future.  He believes in hard work and encourages other to NEVER. GIVE. UP.
   
  <br> Manny resides in Newport Coast, Ca with his wife, model and actress, Leyla Milani and their two children.`
}

document.getElementById("name").innerHTML = myObj["name"];
document.getElementById("title").innerHTML = myObj["title"];
document.getElementById("userImg").alt = myObj["name"];

document.getElementById("favicon").href = images["favicon"];
document.getElementById("userImg").src = images["userImg"];

document.getElementById("email").innerHTML = myObj["email"];
document.getElementById("email").href = "mailto:"+myObj["email"]; 

document.getElementById("about-text").innerHTML=myObj["about-text"];


// document["favicon"].src="./data/images/favicon.JPG";

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

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

  // // add event in all filter button items for large screen
  // let lastClickedBtn = filterBtn[0];

  // for (let i = 0; i < filterBtn.length; i++) {

  //   filterBtn[i].addEventListener("click", function () {

  //     let selectedValue = this.innerText.toLowerCase();
  //     selectValue.innerText = this.innerText;
  //     filterFunc(selectedValue);

  //     lastClickedBtn.classList.remove("active");
  //     this.classList.add("active");
  //     lastClickedBtn = this;

  //   });

  // }



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

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}