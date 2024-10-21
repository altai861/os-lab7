const clearButton = document.getElementById('clear-button');
const calcButton = document.getElementById('calc-button');
const processesTextarea = document.getElementById('processes-textarea');
const frameNumberInput = document.getElementById('frame-input');

clearButton.addEventListener('click', () => {
  processesTextarea.value = '';
  frameNumberInput.value = '';
});

function stringToArray(str) {
  return str.split(',').map((item) => Number(item.trim()));
}

function generateAnswer(p, f) {
  let answer = [];
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < f; j++) {
      answer.push(null);
    }

    if (i === 0) {
      item.push(p[i]);
    }
  }
}

calcButton.addEventListener('click', () => {
  const processesText = processesTextarea.value;
  const frameNumber = frameNumberInput.value;

  if (!processesText || !frameNumber) {
    alert('Өгөгдөл дутуу байна');
  }

  const processes = stringToArray(processesText);
  const frames = parseInt(frameNumber);
});
