const boxes = document.querySelector('#boxes');
const input = document.querySelector('input')
const MAX_BOXES = 100;

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]')

renderBtn.addEventListener('click', addBoxes);

function addBoxes(event) {
  if (input.value <= MAX_BOXES) {
    for (let i = 0; i < input.value; i++) {
      const box = document.createElement('div');
      // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      box.style.width = 30 + 10 * i + "px";
      box.style.height = 30+10*i+"px";
      box.style.background = getRandomRgb();
      function getRandomRgb() {
        let num = Math.round(0xffffff * Math.random());
        let r = num >> 16;
        let g = num >> 8 & 255;
        let b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      };
      boxes.appendChild(box);
    }
  }
}

destroyBtn.addEventListener('click', removeBoxes);

function removeBoxes(event) {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  input.value = "";
}