var montagneDevant = document.getElementById('montagnes_devant');
var montagneMilieu = document.getElementById('montagnes_milieu');
var montagneArriere = document.getElementById('montagnes_arriere');
var rapace = document.getElementById('rapace');
var paysage = document.getElementById('accueil');

new simpleParallax(montagneDevant,{
    orientation:'up'
});
new simpleParallax(montagneArriere,{
    orientation:'down',delay:0.7
});
new simpleParallax(montagneMilieu,{
    orientation:'down', delay:0.4
});


(function() {
    // Add event listener
    paysage.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#rapace");
    // Magic happens here
    function parallax(e) {
        const position = elem.getAttribute("value");
        const x =  e.pageX / window.innerWidth;
        const y = e.pageY / window.innerHeight;
    
        elem.style.transform = `translateX(${-x*100}px) translateY(${-y*100}px)`;
        console.log(position)
    }

})();
const menu = document.getElementById("menubarre");
const indicateur = document.getElementById("indicateur");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      currentSection = section.id;
    }
  });

  const menuItems = menu.querySelectorAll("a");
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
      if(currentSection == 'accueil'){
        indicateur.style.top ='0px';
      }
      else{
          indicateur.style.top = `${item.offsetTop}px`;
      }
    } else {
      item.classList.remove("active");
    }
  });
});