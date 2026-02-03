gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true
});

function animarPagina() {
  // ANIMAÇÕES SECAO_1
gsap.from(".secao_1", {
  opacity: 0,
  duration: 2
});

gsap.from("picture:nth-child(2)", {
  y: 60,
  duration: 2
});

gsap.from("picture:nth-child(1)", {
  y: -60,
  duration: 1
});

// ANIMAÇÕES CARDS CIDADES

gsap.from(".card", {
  opacity: 0,
  // duration: 1,
  // y: 30,
  filter: "blur(10px)",
  stagger: .3,
  scrollTrigger: {
    trigger: ".cards_cidades",
    markers: false,
    start: "0% 80%",
    end: "100% 70%",
    scrub: true
  }
});

gsap.from(".secao_4 ul li", {
  opacity: 0,
  x: 40,
  filter: "blur(10px)",
  stagger: .1,
  scrollTrigger: {
    trigger: ".secao_4 ul",
    markers: false,
    start: "0% 80%",
    end: "100% 50%",
    scrub: true,
  }
});

//ANIMAÇÕES FOOTER

gsap.from("footer", {
  y: "-30%",
  immediateRender: false,
  scrollTrigger: {
    trigger: "footer",
    scrub: true,
    markers: false,
    invalidateOnRefresh: true,
    end: "100% 100%",
  }
});

// LETRAS ANIMADAS
// SELECIONE TODOS OS ELEMENTOS DA SUA PAGINA QUE TEM A CLASSE .textoSplitAnimado
const grupoTextoSplitAnimado = document.querySelectorAll(".textoSplitAnimado")

//ANIMAR CADA ELEMENTO DESSE GRUPAMENTO -> forEach
//ANIME DE FORMA INDEPENDENTE
grupoTextoSplitAnimado.forEach((textoUnicoSplit) => {
  const split = SplitText.create(textoUnicoSplit, {
    type: "lines, words, chars",
    mask: "lines",
  });
  
  gsap.from(split.chars, {
    y: 40, 
    opacity: 0,
    duration: .3, 
    stagger: .03,
    scrollTrigger: {
      trigger: textoUnicoSplit,
      markers: false,
      start: "0% 90%"
    }
  });
})
}

//ANIMAR PRELOADER
//CRIAR TIMELINE
const tl = gsap.timeline({
  onComplete() {
    animarPagina()
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

// Desenho do stroke
tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});

// Preenche o SVG
tl.to("#preloader path", {
  fill: "rgb(255, 0, 0)",
  duration: .5,
  strokeDashoffset: 0,
});

// // Efeito de "engolir a tela"
// tl.to("#preloader", {
//   scale: 20,
//   duration: 1,
//   ease: "power1.in",
//   transformOrigin: "50% 50%",
// });

// Some com ele
// tl.to("#preloader", {
//   opacity: 0,
//   duration: 0,
//   onComplete() {
//     gsap.set("#preloader", {
//       display: "none"
//     });
//   }
// });
