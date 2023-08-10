const toggleButton = document.getElementById('toggleButton');
const elementToHide = document.querySelector('.form');
const elementToShow = document.querySelector('.success');

toggleButton.addEventListener('click', () => {
    if (elementToHide.style.display === 'none') {
        elementToHide.style.display = 'grid';
        elementToShow.style.display = 'none';
    } else {
        elementToHide.style.display = 'none';
        elementToShow.style.display = 'grid';
    }
});
