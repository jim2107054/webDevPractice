const aboutBtn = document.querySelectorAll('.about-btn');

aboutBtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        const aboutDetail = document.querySelectorAll('.about-detail');
        aboutBtn.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        aboutDetail.forEach(detail=>{
            detail.classList.remove('active');
        });
        aboutDetail[idx].classList.add('active');
    });
});