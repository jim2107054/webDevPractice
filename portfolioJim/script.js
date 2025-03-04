const aboutBtn = document.querySelectorAll('.about-btn');

aboutBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        aboutBtn.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    });
});