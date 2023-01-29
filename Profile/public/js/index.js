let web = 'Omnia Ahmed.';
let webArr = web.split('');

let i = 0;
let time = setInterval(() => {
    let letter = webArr[i++]
    // console.log(letter);
    document.querySelector('.intro h1 span').innerHTML += letter;

    if(letter =='.'){
        // document.querySelector('.intro h1 span').innerHTML = ''
        clearInterval(time);
    }
}, 100);


