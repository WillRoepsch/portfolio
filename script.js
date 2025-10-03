
document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.menu');
  if(btn && menu){
    btn.addEventListener('click',()=>{
      if(menu.style.display==='flex'){ menu.style.display='none'; }
      else { menu.style.display='flex'; }
    });
  }
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    if(a.getAttribute('href')===here){ a.classList.add('active'); }
  });
});
