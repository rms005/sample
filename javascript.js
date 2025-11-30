
  
  AOS.init();
    
    // smooth in-page scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const href=a.getAttribute('href');
        const tgt=document.querySelector(href);
        if(tgt){ e.preventDefault(); tgt.scrollIntoView({behavior:'smooth', block:'start'}) }
      })
    });
    // year
    document.getElementById('yr').textContent = new Date().getFullYear();
  
  
  var typed = new Typed("#role", {
    strings: ["Web Developer", "Tech Enthusiast", "Data Analyst", "AI Learner"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });
