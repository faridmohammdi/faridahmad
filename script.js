
const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click',() =>{
  toggleIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
});

/*==== menu icon navbar ===== */


/* scroll sections active link */
let sections = document. querySelectorAll('section');
let navLinks = document. querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
        let top =window .scrollY;
        let offset = sec.offsetTop -150;
        let height =sec . offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navLinks.forEach(Links => {
              Links.classList.remove('active');
              document.querySelector ('header nav a [href *='+ id + ']').classList.add('active');
            });
        }
     });

  /*sticky navbar*/
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);
}

/*Testimonial*/
const slides = document.querySelector('.slider').children;
const indicatorImages=document.querySelector('.slider-indicator').children;

  for(let i=0; i<indicatorImages.length; i++){
      indicatorImages[i].addEventListener('click',function(){

        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove('active');
        }

        this.classList.add('active');
         const id=this.getAttribute('data-id');
        for(let j=0; j<slides.length; j++){
          slides[j].classList.remove('active');
        }
        slides[id].classList.add('active');
      })
  }

/*======== sticky navbar ======*/
  let header = document.querySelector('.header');
  header .classList.toggle ('sticky, window.scrolly > 100');


/*===== remove menu icon navbar when click navbar link (scroll) ===== */

  toggleIcon.classList.remove('bx-sun');
  document.body.classList.remove('dark-mode');

