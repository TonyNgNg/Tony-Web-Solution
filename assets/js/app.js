const modal = document.getElementById('serviceModal');
const openBtns = [document.getElementById('requestBtn'), document.getElementById('requestBtn2')];
const closeBtn = document.getElementById('closeModal');

openBtns.forEach(btn => btn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}));

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
});

modal.addEventListener('click', (e)=>{
  if(e.target === modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
  }
});
