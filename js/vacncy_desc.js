const vacancies = document.querySelectorAll('.vacancy_description');
const openButtons = document.querySelectorAll('.open_description');


openButtons.forEach((el, index) => {
    el.addEventListener('click', () => {
        el.style.transform = 'rotate(45deg)';
        vacancies[index].style.display = 'block';
        el.addEventListener('click', () => {
            vacancies[index].style.display = 'none';
            el.style.transform = 'rotate(90deg)';
        });
    });
});
