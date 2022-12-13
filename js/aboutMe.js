function checkOn1(at) {

    if (at >= 115) {
        document.querySelector('.txt1').classList.add('txtOn');
        document.querySelector('.canada').classList.add('canadaOn');
    }
    else {
        document.querySelector('.txt1').classList.remove('txtOn');
        document.querySelector('.canada').classList.remove('canadaOn');
    };

    if (at >= 135) {
        document.querySelector('.txt2').classList.add('txtOn');
    }
    else {
        document.querySelector('.txt2').classList.remove('txtOn');
    };

    if (at >= 165) {
        document.querySelector('.txt3').classList.add('txtOn');
    }
    else {
        document.querySelector('.txt3').classList.remove('txtOn');
    };

    if (at >= 185) {
        document.querySelector('.txt4').classList.add('txtOn');
    }
    else {
        document.querySelector('.txt4').classList.remove('txtOn');
    };

    if (at >= 215) {
        document.querySelector('.txt5').classList.add('txtOn');
        document.querySelector('.python').classList.add('pythonOn');
    }
    else {
        document.querySelector('.txt5').classList.remove('txtOn');
        document.querySelector('.python').classList.remove('pythonOn');
    };

    if (at >= 235) {
        document.querySelector('.txt6').classList.add('txtOn');
        document.querySelector('.dcc').classList.add('dccOn');
    }
    else {
        document.querySelector('.txt6').classList.remove('txtOn');
        document.querySelector('.dcc').classList.remove('dccOn');
    };

    if (at >= 285) {
        document.querySelector('.txt7').classList.add('txtOn7');
    }
    else {
        document.querySelector('.txt7').classList.remove('txtOn7');
    };
    if (at >= 445) {
        document.querySelector('.txt8').classList.add('txtOn');
        document.querySelector('.txt9').classList.add('txtOn');
    }
    else {
        document.querySelector('.txt8').classList.remove('txtOn');
        document.querySelector('.txt9').classList.remove('txtOn');
    };
};

function calculateAge(date) {
    const now = new Date();
    const diff = Math.abs(now - date);
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return age
}

window.addEventListener('load', (e) => {
    if(screen.availHeight > screen.availWidth){
        alert("Please view in a computer in landscape orientation!");
    };
    setTimeout(() => {
        let age = calculateAge("1124946000000");
        document.querySelector('.age').innerHTML = ""+age ;

        var at = window.scrollY / screen.height * 100;
        if (at >= 105) {
            document.querySelector('.quote').classList.add('quoteOn');
        }
        else {
            document.querySelector('.quote').classList.remove('quoteOn');
        };
        if (at >= 90) {
            document.querySelector('.vid').classList.add('vidOn');
        }
        else {
            document.querySelector('.vid').classList.remove('vidOn');
        };
        checkOn1(at);
    }, 3000);
});

window.onscroll = function (e) {
    var at = window.scrollY / screen.height * 100;
    if (at >= 55 && at <= 120) {
        document.querySelector('.centerGuide').style.height = (at - 65).toString() + 'vh';
        if (at >= 105) {
            document.querySelector('.quote').classList.add('quoteOn');
        }
        else {
            document.querySelector('.quote').classList.remove('quoteOn');
        };
        if (at >= 80) {
            document.querySelector('.vid').classList.add('vidOn');
        }
        else {
            document.querySelector('.vid').classList.remove('vidOn');
        };
    };
    if (at >= 30 && at <= 640) {
        document.querySelector('.sideGuide1').style.height = (at - 90).toString() + 'vh';
        document.querySelector('.sideGuide2').style.height = (at - 90).toString() + 'vh';
        checkOn1(at);
    };
};