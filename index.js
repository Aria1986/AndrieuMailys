var montagneDevant = document.getElementById('montagnes_devant');
var montagneMilieu = document.getElementById('montagnes_milieu');
var montagneArriere = document.getElementById('montagnes_arriere');
var rapace = document.getElementById('rapace');
var paysage = document.getElementById('paysage');

new simpleParallax(montagneDevant,{
    orientation:'up'
});
new simpleParallax(montagneArriere,{
    orientation:'down right'
});
new simpleParallax(montagneMilieu,{
    orientation:'down'
});


new simpleParallax(rapace,{
    orientation:'down',
    scale:1.2
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