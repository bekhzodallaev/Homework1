const numberInput = document.getElementById('input');
const inputValue = document.querySelector('.result');
const submitBtn = document.querySelector('.btn');

function getNum() {
  return parseInt(numberInput.value, 10);
}

function convertBinary() {
  let remainder = 0;
  let value = getNum();
  let binaryString = '';

  if (value < 0) {
    inputValue.textContent = 'Negative values are not supported';
    return;
  }

  if (value == 0) {
    binaryString = '0';
  } else {
    while (value > 0) {
      remainder = value % 2;
      binaryString = remainder + binaryString;
      value = Math.floor(value / 2);
    }
  }
  inputValue.textContent = binaryString;
}

submitBtn.addEventListener('click', convertBinary);
