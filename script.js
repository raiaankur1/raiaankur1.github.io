let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top <offset + height){
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        if(id === 'home' || id ==='education' || id === 'projects'){
          document.querySelector('.header').style.backgroundColor = 'var(--bg-color)';
        } else{
          document.querySelector('.header').style.backgroundColor = 'var(--second-bg-color)';
        }
      });
    }
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
};


// window.onresize = (event) =>{
//   console.log(window.innerWidth);
//   if(window.innerWidth >= 769) {
    // console.log(window.innerWidth)
    let briefs = document.querySelectorAll(".brief");
    let modals = document.querySelectorAll(".modal");
    // console.log(briefs);
    // console.log(modals);
    briefs.forEach((brief, i) => {
      let modal = modals[i];
      // When the user clicks on the button, open the modal
      // if(window.innerWidth >= 769){
      brief.onclick = function() {
        // modal.classList.toggle("show");
        modal.style.display = "block";
        document.querySelectorAll("header nav a").forEach(anchor => {
          anchor.style.pointerEvents = "none";
        });
      }
      // }

      // if(window.innerWidth >= 769){
      modal.onclick = function(event) {
        // modal.classList.toggle("show");
        modal.style.display = "none";
        document.querySelectorAll("header nav a").forEach(anchor => {
          anchor.style.pointerEvents = "auto";
        });
      }
      // }

      // When the user clicks anywhere outside of the modal, close it
      // if(window.innerWidth >= 769){
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
          // modal.classList.toggle("show");
          document.querySelectorAll("header nav a").forEach(anchor => {
            anchor.style.pointerEvents = "auto";
          });
        }
      }
      // }
    });
//   }
// }