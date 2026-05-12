// GSAP Scroll Animations
         gsap.registerPlugin(ScrollTrigger);
         gsap.utils.toArray('[data-anim]').forEach(el=>{
           gsap.from(el,{opacity:0,y:50,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 80%"}});
         });
         
         // Lottie Hero Animation
         lottie.loadAnimation({container: document.getElementById('hero-lottie'), renderer: 'svg', loop: true, autoplay: true, path: 'https://assets4.lottiefiles.com/packages/lf20_x62chJ.json'});
         
         // Skills Charts
         const skillOptions={type:'doughnut',data:{datasets:[{data:[90,10],backgroundColor:['#e83e8c','#333']}]},options:{cutout:'70%',plugins:{legend:{display:false}}}};
         new Chart(document.getElementById('skill1'),skillOptions);
         skillOptions.data.datasets[0].data=[80,20]; new Chart(document.getElementById('skill2'),skillOptions);
         skillOptions.data.datasets[0].data=[70,30]; new Chart(document.getElementById('skill3'),skillOptions);
         
         // Portfolio Filter with Animation
         const filterBtns=document.querySelectorAll('.filter-btns button');
         const projects=document.querySelectorAll('.portfolio-grid .glass-card');
         filterBtns.forEach(btn=>{
         btn.addEventListener('click',()=>{
         filterBtns.forEach(b=>b.classList.remove('active'));
         btn.classList.add('active');
         const filter=btn.dataset.filter;
         projects.forEach(p=>{
         if(filter==='all'||p.dataset.category===filter){gsap.to(p,{display:'block',opacity:1,duration:0.5});}
         else{gsap.to(p,{opacity:0,duration:0.5,onComplete:()=>{p.style.display='none';}});}
         });
         });
         });
         
         // Lightbox with info and navigation
         const lightbox=document.getElementById('lightbox');
         const lightboxImg=lightbox.querySelector('img');
         const titleEl=lightbox.querySelector('.project-info h3');
         const descEl=lightbox.querySelector('.project-info p');
         const linkEl=lightbox.querySelector('.project-info a');
         const closeBtn=lightbox.querySelector('.close-btn');
         const prevBtn=lightbox.querySelector('.nav-prev');
         const nextBtn=lightbox.querySelector('.nav-next');
         let currentIndex=0;
         const images=[...document.querySelectorAll('.lightbox-trigger')];
         
         function openLightbox(i){
           const card=images[i].closest('.glass-card');
           lightboxImg.src=images[i].src;
           titleEl.textContent=card.dataset.title;
           descEl.textContent=card.dataset.desc;
           linkEl.href=card.dataset.link;
           lightbox.style.display='flex';
           currentIndex=i;
         }
         images.forEach((img,i)=>{img.addEventListener('click',()=>{openLightbox(i);});});
         closeBtn.addEventListener('click',()=>{lightbox.style.display='none';});
         lightbox.addEventListener('click',e=>{if(e.target===lightbox) lightbox.style.display='none';});
         prevBtn.addEventListener('click',()=>{currentIndex=(currentIndex-1+images.length)%images.length;openLightbox(currentIndex);});
         nextBtn.addEventListener('click',()=>{currentIndex=(currentIndex+1)%images.length;openLightbox(currentIndex);});
         
         // Contact Form
         document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Your message has been sent.');});