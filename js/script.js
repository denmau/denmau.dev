
const texts = ['Hello', '¡Hola!', 'Bonjour', 'Ciao', 'néih hóu', 'こんにちは'];
const textElement = document.getElementById('hello-animation');

let index = 0;
let letterIndex = 0;

function animate() {
    const currentText = texts[index];
    textElement.textContent = currentText.slice(0, ++letterIndex);

    if (letterIndex === currentText.length) {
        setTimeout(() => {
            letterIndex = 0;
            index = (index + 1) % texts.length;
        }, 500);
    }

    setTimeout(animate, 400);
}

animate();
console.log('Contact: dmkamau475-at-gmail-dot-com');
