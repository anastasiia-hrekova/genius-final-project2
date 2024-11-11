const button = document.querySelector('.main-page__btn');
const section = document.querySelector('.navigation');

const toggleOpen = () => {
    section.classList.toggle('hidden');

if(!section.classList.contains('hidden')){
    section.scrollIntoView({behavior: "smooth", block: "start"})
}
};

button.addEventListener('click', toggleOpen);
button.addEventListener('click', toggleOpen);





     