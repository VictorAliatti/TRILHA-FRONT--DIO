

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botaoSaibaMais");

  
  botao.addEventListener("mouseenter", () => {
    botao.style.boxShadow = "0 0 15px #00f0ff, 0 0 30px #ff00ff";
    botao.style.transition = "0.3s";
  });

  botao.addEventListener("mouseleave", () => {
    botao.style.boxShadow = "0 0 10px #00f0ff";
  });

  const secaoMais = document.createElement("section");
  secaoMais.classList.add("secao-mais");
  secaoMais.innerHTML = `
    <h2>✨ Mensagem Especial</h2>
    <p>Continue estudando e evoluindo. Cada linha de código é um passo mais próximo dos seus sonhos. Nunca pare de criar!</p>
  `;

 
  secaoMais.style.boxShadow = "0 0 20px #ff00ff, 0 0 50px #00f0ff";
  secaoMais.style.border = "1px solid rgba(255,255,255,0.2)";
  secaoMais.style.borderRadius = "15px";
  secaoMais.style.padding = "20px";
  secaoMais.style.margin = "40px auto";
  secaoMais.style.maxWidth = "600px";
  secaoMais.style.color = "#fff";
  secaoMais.style.background = "rgba(0,0,0,0.3)";
  secaoMais.style.backdropFilter = "blur(10px)";
  secaoMais.style.transition = "all 0.5s ease-in-out";
  secaoMais.style.opacity = 0;

  let visivel = false;

  botao.addEventListener("click", () => {
  if (!visivel) {
    botao.parentElement.appendChild(secaoMais);
    setTimeout(() => {
      secaoMais.style.opacity = 1;
    }, 50);
    botao.innerText = "Ocultar Mensagem";
  } else {
    secaoMais.style.opacity = 0;
    setTimeout(() => {
      if (secaoMais.parentElement) {
        secaoMais.parentElement.removeChild(secaoMais);
      }
    }, 300);
    botao.innerText = "Clique para uma mensagem motivacional";
  }
  visivel = !visivel;
});
;


  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = 1;
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });
});

