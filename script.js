const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.site-nav');if(toggle){toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',!expanded);nav.style.display=expanded?'none':'flex';});}

const reveals=document.querySelectorAll('.reveal-up');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity=1;entry.target.style.transform='translateY(0)';}});},{threshold:0.1});
reveals.forEach(el=>{el.style.opacity=0;el.style.transform='translateY(30px)';observer.observe(el);});