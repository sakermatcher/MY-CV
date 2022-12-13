function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function randomLight(collection){
    let active = document.getElementsByClassName("active");
    let a= getRandom(collection, 300)
    for(let i= 0; i<300; i++){
        a[i].classList.add('active');
        active[i].classList.remove('active')
    }
};

if (isMobile() == true) {
    const collection = document.getElementsByClassName("bak");
    setInterval(randomLight, 1000, collection);
};


function right (){
    let r= document.querySelector(".pjright");
    let l= document.querySelector(".pjleft");
    let c= document.querySelector(".pjcenter");

    r.classList.remove('pjright');
    l.classList.remove('pjleft');
    c.classList.remove('pjcenter');

    r.classList.add('pjleft');
    l.classList.add('pjcenter');
    c.classList.add('pjright');
};

function left (){
    let r= document.querySelector(".pjright");
    let l= document.querySelector(".pjleft");
    let c= document.querySelector(".pjcenter");

    r.classList.remove('pjright');
    l.classList.remove('pjleft');
    c.classList.remove('pjcenter');

    r.classList.add('pjcenter');
    l.classList.add('pjright');
    c.classList.add('pjleft');
};