/* ----- MARCADOR DE SEÇÃO ------------*/
document.addEventListener('DOMContentLoaded', function() {

var secao = document.getElementsByClassName('secoes--definicao');
var marcador = document.getElementsByClassName('nav__itens');

window.addEventListener('scroll', function() {
  var currentPosition = window.pageYOffset;

  for (var i = 0; i < secao.length; i++) {
    var secaoTop = secao[i].offsetTop - 100;
    var secaoBottom = secaoTop + secao[i].offsetHeight -180;

    if (currentPosition >= secaoTop && currentPosition < secaoBottom) {
      for (var j = 0; j < marcador.length; j++) {
        marcador[j].classList.remove('nav__itens--ativo');
      }
      marcador[i].classList.add('nav__itens--ativo');
      break;
    } else {
      marcador[i].classList.remove('nav__itens--ativo');
    }
  }
  /* -----  ------------*/


/* ----- MARCADOR DE SEÇÃO ------------*/
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 5) {
        document.querySelector(".header").classList.add("active");
        document.querySelectorAll(".nav__links").forEach(function(el) {
            el.style.color = "#F2EFDF";
          });

    } else {
        document.querySelector(".header").classList.remove("active");
        document.querySelectorAll(".nav__links").forEach(function(el) {
            el.style.color = "black";
          });
    }
});
/* ----- FIM DO MARCADOR DE SEÇÃO ------------*/

/* ----- TAGS DA SEÇÃO DE PROJETOS ------------*/
var projetos = document.getElementsByClassName("projetos");

Array.from(projetos).forEach(function(elemento) {
  elemento.addEventListener("mouseover", function() {
    this.querySelector(".legenda___projetos").classList.add("content--active");
    this.querySelector(".legenda___projetos:nth-child(odd)").classList.add("content--active");
    this.querySelector(".projeto--img").classList.add("projeto--img--active");
  });

  elemento.addEventListener("mouseout", function() {
    this.querySelector(".legenda___projetos").classList.remove("content--active");
    this.querySelector(".legenda___projetos:nth-child(odd)").classList.remove("content--active");
    this.querySelector(".projeto--img").classList.remove("projeto--img--active");

  });
});
/* ----- FIM DAS TAGS DA SEÇÃO DE PROJETOS ------------*/

var svgObjects = document.getElementsByClassName("img--posicao");
var titulo = document.querySelector(".titulo__icones--posicao");

Array.from(svgObjects).forEach(function(svgObject) {

  svgObject.addEventListener("load", function() {
    var svgDoc = svgObject.getSVGDocument();
    var svgElement = svgDoc.querySelector("svg");
    var corNativa = "#F2EFDF";
    var corHover = "#AEBFBE";

    titulo.style.color = corNativa;
    svgElement.style.fill = corNativa;
    svgObject.addEventListener("mouseover", function() {
      svgElement.style.setProperty("fill", corHover, "important");
      titulo.style.color = corHover;
      svgElement.style.transition = "fill 0.3s";
      svgElement.style.cursor = "pointer";
    });

    svgObject.addEventListener("mouseout", function() {
      svgElement.style.setProperty("fill", corNativa, "important");
      titulo.style.color = corNativa;
    });
  });
});

});

});

