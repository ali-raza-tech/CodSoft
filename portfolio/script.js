/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
// Create a new anchor element
const downloadLink = document.createElement("a");

// Set the href attribute to the path of your CV file
downloadLink.href = "/myResume.pdf";

// Set the download attribute to specify the desired file name
downloadLink.download = "/myResume.pdf";

// Add the "btn" class to the anchor to apply the same styles
downloadLink.className = "btn";

downloadLink.innerHTML = 'Download CV <i class="uil uil-file-alt"></i>';

// Apply CSS styles to remove underline and change the color
downloadLink.style.textDecoration = "none"; // Remove underline
downloadLink.style.color = "black";

// Set the inner HTML of the anchor
downloadLink.innerHTML = 'Download CV <i class="uil uil-file-alt"></i>';

// Add the anchor to the download container
document.getElementById("downloadContainer").appendChild(downloadLink);

// Select the download container
const downloadContainer = document.getElementById("downloadContainer");

// Select the button you want to remove (for example, the first button)
const buttonToRemove = downloadContainer.querySelector(".btn");

// Check if the button exists before attempting to remove it
if (buttonToRemove) {
  // Remove the button from the container
  downloadContainer.removeChild(buttonToRemove);
}


// Create a new anchor element for the second download link
const downloadLink2 = document.createElement("a");

// Set the href attribute to the path of your CV file
downloadLink2.href = "/myResume.pdf";

// Set the download attribute to specify the desired file name
downloadLink2.download = "myResume.pdf"; // Remove the leading slash

// Add the "btn" class to the anchor to apply the same styles
downloadLink2.className = "btn";

// Set the inner HTML of the anchor
downloadLink2.innerHTML = 'Download CV <i class="uil uil-file-alt"></i>';

// Select the container where you want to add the second download link
const container = document.querySelector('.featured-text-btn');

// Add the anchor to the container
container.appendChild(downloadLink2);


// Select the second button and remove the icon
const buttonToRemoveIcon = document.querySelector('.featured-text-btn .btn i[class*="uil-file-alt"]');

// Check if the icon element exists before attempting to remove it
if (buttonToRemoveIcon) {
  buttonToRemoveIcon.remove();
}






