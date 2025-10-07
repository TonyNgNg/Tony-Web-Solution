const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';menuBtn.setAttribute('aria-expanded',String(!open));});}nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<721)nav.style.display='none';}));document.getElementById('year').textContent=new Date().getFullYear();
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
