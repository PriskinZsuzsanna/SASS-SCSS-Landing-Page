document.querySelector('.toggle').addEventListener('click', (e) => {
    document.body.classList.toggle('dark')
    if(e.target.firstElementChild.className === "fa-solid fa-moon") {
        e.target.firstElementChild.className = "fa-solid fa-sun"
    } else {
        e.target.firstElementChild.className = "fa-solid fa-moon"
    }
})

document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('open');
    if(document.querySelector('#menu').classList.contains('fa-bars')) {
        document.querySelector('#menu').className = 'fa-solid fa-close'
    } else {
        document.querySelector('#menu').className = 'fa-solid fa-bars'
    }
})

document.querySelector('ul').addEventListener('click', () => {
    document.querySelector('ul').classList.remove('open');
    document.querySelector('#menu').className = 'fa-solid fa-bars';
})

