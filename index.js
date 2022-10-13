const btn = document.querySelector('.toggle-btn')
const menu = document.getElementById('menu')


btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    menu.classList.toggle("active")

})

const counter = document.querySelector(".counter")
const counter1 = document.querySelector(".counter1")


let counters = 0;
let couters1 = 0;

while (counters < 10) {
    let value = counters++;
    counter.classList.toggle("addmore")
    counter.innerHTML = value;
}