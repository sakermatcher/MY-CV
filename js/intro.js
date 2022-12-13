const splash = document.querySelector('.splash');

window.addEventListener('load', (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 300);
    setTimeout(() => {
        splash.remove();
    }, 500);
});