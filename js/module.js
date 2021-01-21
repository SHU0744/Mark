
//ドロワーメニュー
//ボタン取得
const jsHamburger = document.getElementById('js-hamburger');

//body全部取得
const body = document.body;

const $text = document.querySelector('.text');

const hamburger = () => {
    jsHamburger.addEventListener('click', () => {
        body.classList.toggle('is-drawerActive');
        $text.classList.toggle('is-drawerActive');
    })
}

export { hamburger };



const options = {
    root: null,
    threshold: .7,
};


//about
function callback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show', 'is-active');
        } else {
            entry.target.classList.remove('is-active');
        }
    });
}


const observer = new IntersectionObserver(callback, options);

const target1 = document.querySelector('.cover');

const targets = document.querySelectorAll('.Leader-item');

const observerNews = () => {
    observer.observe(target1);
    targets.forEach(target => observer.observe(target));

}



//home

function callbackHome(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        }
    });
}

const targetHomes = document.querySelectorAll('.observer');

const observerhome = new IntersectionObserver(callbackHome, options);

const observerHome = () => {
    targetHomes.forEach(target => observerhome.observe(target));

}


//company

function callbackCom(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        } else {
            entry.target.classList.remove('is-active');
        }
    });
}


const observerCom = new IntersectionObserver(callbackCom, options);

const targetCom = document.querySelector('.tablewrap');

const observercom = () => {
    observerCom.observe(targetCom);
}



export { observerNews, observerHome, observercom };

const HomeText = document.querySelector('.homeTop-text');

const setHomeText = () => {

    setTimeout(() => {
        HomeText.classList.add('load');
    }, 200);
}




const aboutText = document.querySelector('.text');

const setText = () => {

    setTimeout(() => {
        aboutText.classList.add('load');
    }, 200);

}

export { setHomeText,setText};
