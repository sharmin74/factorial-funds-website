let logo = document.getElementById('factorial-funds__logo');

window.addEventListener('scroll', () => {
    if(scrollY > 100){
        logo.classList.add('factorial-funds__logo-hide')
    }else if(scrollY < 100){
        logo.classList.remove('factorial-funds__logo-hide')
    }
})