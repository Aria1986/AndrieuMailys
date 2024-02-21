var montagneDevant = document.getElementById('montagnes_devant');
var montagneMilieu = document.getElementById('montagnes_milieu');
var montagneArriere = document.getElementById('montagnes_arriere');
var rapace = document.getElementById('rapace');
var paysage = document.getElementById('paysage');

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