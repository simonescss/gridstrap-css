   // navbar
   var el = document.querySelector('.hb');
   var nav = document.querySelector('#nav');
   var header = document.querySelector('#header');

   el.onclick = function(e) {
       e.preventDefault();    
       nav.classList.toggle('open');
       el.classList.toggle('active');
       header.classList.toggle('fixed');
   }

   // Navbar scroll-x mobile
   window.onscroll = function() {docNavbar()};
            
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
  
    // Grids
    var sec_grids = document.getElementById("sec_grids");
    var btn_grids = document.getElementById("btn_grids");
    var sec_active_grids = sec_grids.offsetTop;
    // Navbar
    var sec_navbar = document.getElementById("sec_navbar");
    var btn_navbar = document.getElementById("btn_navbar");
    var sec_active_nav = sec_navbar.offsetTop;
    // Typo
    var sec_typo = document.getElementById("sec_typo");
    var btn_typo = document.getElementById("btn_typo");
    var sec_active_typo = sec_typo.offsetTop;
    // Components
    var sec_comp = document.getElementById("sec_comp");
    var btn_comp = document.getElementById("btn_comp");
    var sec_active_comp = sec_comp.offsetTop;
    // Example
    // var sec_ex = document.getElementById("sec_ex");
    // var btn_ex = document.getElementById("btn_ex");
    // var sec_active_ex = sec_ex.offsetTop;
    
  function docNavbar() {
        
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        sec_grids.classList.add("pad_doc");
          
      } else {
        navbar.classList.remove("sticky");
        sec_grids.classList.remove("pad_doc");
      };
        
      if (window.pageYOffset >= sec_active_grids) {
        btn_grids.classList.add("btn_active");
      } else {
        btn_grids.classList.remove("btn_active");
      };
        
      if (window.pageYOffset >= sec_active_nav) {
      btn_navbar.classList.add("btn_active");
      btn_grids.classList.remove("btn_active");
      } else {
        btn_navbar.classList.remove("btn_active");
      };
    
      if (window.pageYOffset >= sec_active_typo) {
        btn_typo.classList.add("btn_active");
        btn_navbar.classList.remove("btn_active");
      } else {
        btn_typo.classList.remove("btn_active");
      };
    
      if (window.pageYOffset >= sec_active_comp) {
          btn_comp.classList.add("btn_active");
          btn_typo.classList.remove("btn_active");
        } else {
          btn_comp.classList.remove("btn_active");
        };
    
      if (window.pageYOffset >= sec_active_ex) {
          btn_ex.classList.add("btn_active");
          btn_comp.classList.remove("btn_active");
        } else {
          btn_ex.classList.remove("btn_active");
        };
        
    }

    // Lax.js
    window.onload = function() {
              
          lax.setup() // init

          const updateLax = () => {
              
              lax.update(window.scrollY)
              window.requestAnimationFrame(updateLax)
          }
          
          window.requestAnimationFrame(updateLax)
      }

