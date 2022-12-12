const splash = document.querySelector('.splash');

window.addEventListener('load', (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 3000);
    setTimeout(() => {
        splash.remove();
    }, 5000);
});