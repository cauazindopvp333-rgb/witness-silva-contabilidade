// Ano automático
document.getElementById('year').textContent = new Date().getFullYear();

// Animação ao rolar
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Formulário
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(!name || !email || !message){
    alert("Preencha todos os campos!");
    return;
  }

  const subject = encodeURIComponent("Contato via site: " + name);
  const body = encodeURIComponent(
    `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`
  );

  window.location.href = `mailto:witene.carol14@gmail.com?subject=${subject}&body=${body}`;
});

// Botão 'Solicitar Orçamento'
document.getElementById("btn-contact").addEventListener("click", ()=>{
  document.getElementById("contact-panel").scrollIntoView({behavior:"smooth"});
});
