const generateButton = document.querySelector('.generateButton');
const greetingMessage = document.getElementById('greetingMessage');
const errorMessage = document.getElementById('errorMessage');

errorMessage.style.display = 'none';
greetingMessage.style.display = 'none';

generateButton.addEventListener("click", () => {
    const userName = document.getElementById('nameInput').value.trim();
    if (userName === "") {
        errorMessage.style.display = 'block';
        greetingMessage.style.display = 'none';
        errorMessage.innerText = "Please enter your name for greeting message.";
    } else {
        errorMessage.style.display = 'none';
        greetingMessage.innerHTML = "Hello, " + userName + "! Hope you have a wonderful day!";
        greetingMessage.style.display = 'block';
        greetingMessage.classList.remove('greeting-animation');

        setTimeout(() => {
            greetingMessage.classList.add('greeting-animation');
        }, 0);
    }
});