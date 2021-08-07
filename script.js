const navSlide = () => {
    const burger = document.querySelector('.burger');
    const listsbox = document.querySelector('.listsbox');
    burger.addEventListener('click', () => {
        nav.classList.toggle('listsbox-active');
    });
}
navSlide();