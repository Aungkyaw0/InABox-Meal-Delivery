function b1(){
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-border');
}, { once: true });
}

function b2(){
    const toggleButton = document.getElementById('toggleB2');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-border');
}, { once: true });
}

function b3(){
    const toggleButton = document.getElementById('toggleB3');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-border');
}, { once: true }); 
}

function b4(){
    const toggleButton = document.getElementById('toggleB4');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-border');
}, { once: true }); 
}

function b5(){
    const toggleButton = document.getElementById('toggleB5');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-border');
}, { once: true }); 

}


function b6(){
    const toggleButton = document.getElementById('toggleB6');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-chcolor');
}, { once: true }); 
}

function b7(){
    const toggleButton = document.getElementById('toggleB7');
    const toggleButton2 = document.getElementById('toggleB6');
    toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('btn-chcolor');
    toggleButton2.classList.toggle('btn-nocolor');

}, { once: true }); 
}

