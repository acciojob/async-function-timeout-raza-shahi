//your JS code here. If required.
const button = document.getElementById("btn");
const inpMessaage = document.getElementById("text");
const inpDelay = document.getElementById("delay");
const ouput = document.getElementById("output");

async function handleClick() {
  const text = await renderMessage();
  ouput.textContent = text;
}

function renderMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inpMessaage.value);
    }, 1000);
  });
}

button.addEventListener("click", handleClick);
