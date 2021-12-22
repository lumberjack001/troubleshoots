const navSlide = () =>{
    const menu = document.querySelector('#menu');
    const list = document.querySelector('#toggle:checked');

    menu.addEventListener('click', () =>{
        list.classList.toggle('#toggle:checked');
    });
}

navSlide();