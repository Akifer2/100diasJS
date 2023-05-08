document.body.style.backgroundColor = "black";

function trocaChar() {
    const MatrixChar = document.getElementById("MatrixChar")
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    MatrixChar.innerText = randomChar;
}

setInterval(trocaChar, 100);
