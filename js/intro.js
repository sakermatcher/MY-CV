const splash = document.querySelector('.splash');

const isMobile = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return true;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return true;
    }
    return false;
};

if (isMobile() == true){
    alert("Use a computer")
}

window.addEventListener('load', (e) => {
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 300);
    setTimeout(() => {
        splash.remove();
    }, 500);
});