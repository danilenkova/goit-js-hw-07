const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let value = 0;

incrementBtn.addEventListener('click', event => {
    // console.log(`${value} + 1`);
    value += 1;
    // console.log(value);
    counterValue.textContent = value;
});

decrementBtn.addEventListener('click', event => {
    // console.log(`${value} - 1`);
    value -= 1;
    // console.log(value);
    counterValue.textContent = value;
})
