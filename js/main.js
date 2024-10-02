// Enter your code below.
let div = document.querySelector('div.javascript-resources');
let button = document.querySelector('#show-resources');

button.addEventListener('click', function () {
    div.classList.remove('d-none')
})

div.addEventListener('mouseover', function (event) {
    console.log(event.target);

    let extract = event.target;
    extract.classList.add('fw-bold');
})

div.addEventListener('mouseout', function (event) {
    let extract = event.target;
    extract.classList.remove('fw-bold');
})

div.addEventListener('click', function (event) {
    let extract = event.target;
    extract.classList.add('fst-italic')
})