//your JS code here. If required.
const output = document.getElementById("output");
const button = document.getElementById("btn");

function delayMessage() {
	const inputText = document.getElementById("text").value.trim();
const inputDelay = parseInt(document.getElementById("delay").value.trim());
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputText);
        }, inputDelay);
    });
}
async function displayMessage() {
    const message = await delayMessage();
	output.innerText = message;
}


button.addEventListener("click", displayMessage);