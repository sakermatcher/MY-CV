function checkOn1 (at) {

    if (at >= 135) {
        document.querySelector('#sec1Txt1').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt1').classList.remove('txt1On');
    };

    if (at >= 155) {
        document.querySelector('#sec1Txt2').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt2').classList.remove('txt1On');
    };

    if (at >= 185) {
        document.querySelector('#sec1Txt3').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt3').classList.remove('txt1On');
    };

    if (at >= 205) {
        document.querySelector('#sec1Txt4').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt4').classList.remove('txt1On');
    };

    if (at >= 235) {
        document.querySelector('#sec1Txt5').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt5').classList.remove('txt1On');
    };

    if (at >= 255) {
        document.querySelector('#sec1Txt6').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt6').classList.remove('txt1On');
    };

    if (at >= 310) {
        document.querySelector('#sec1Txt7').classList.add('txt1On');
    }
    else {
        document.querySelector('#sec1Txt7').classList.remove('txt1On');
    };
};

window.addEventListener('load', (e) => {
    setTimeout(() => {
        var at = window.scrollY/screen.height*100;
        if (at >= 105) {
            document.querySelector('.quote').classList.add('quoteOn');
        }
        else {
            document.querySelector('.quote').classList.remove('quoteOn');
        };
        checkOn1(at);
    }, 3000);
});

window.onscroll = function (e) {
    var at = window.scrollY/screen.height*100;
    if (at >= 55 && at <= 125) {
        document.querySelector('.centerGuide').style.height = (at - 65).toString()+'vh';
        if (at >= 105) {
            document.querySelector('.quote').classList.add('quoteOn');
        }
        else {
            document.querySelector('.quote').classList.remove('quoteOn');
        };
    };
    if (at >= 90 && at <= 400) {
        document.querySelector('.sideGuide1').style.height = (at - 110).toString()+'vh';
        document.querySelector('.sideGuide2').style.height = (at - 110).toString()+'vh';
        checkOn1(at);
    };
};