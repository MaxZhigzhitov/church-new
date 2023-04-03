const headerSidenav = document.querySelector('.header__sidenav');
const headerSidenavBtn = document.querySelector('.btn-sidenav-toggle');

function headerSidenavToggle(){
    window.addEventListener('keydown', function(e){
        if(e.key == 'Escape'){
            console.log(e.key);
            headerSidenav.classList.remove('sidenav__open');

        }
    });
    
    if(!headerSidenav.classList.contains('sidenav__open')){
        headerSidenav.classList.add('sidenav__open');
    }else{
        headerSidenav.classList.remove('sidenav__open');
    }
}

headerSidenavBtn.addEventListener('click', headerSidenavToggle);



const swiper = new Swiper('.parish__slider-container', {
    direction: 'horizontal',
    loop: 'true',
    slidesPerView: 1,
    autoHeight: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

})