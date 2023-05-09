const colorThemeBtn = document.querySelector("#colorThemeButton");
var MStext = document.querySelector("#msText");

var clickCount = 1;

function mudaCor() {
    clickCount++;

    if (clickCount % 2 == 0) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        colorThemeBtn.style.backgroundColor = "aliceblue"
        MStext.innerHTML = "MoonLight"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        colorThemeBtn.style.backgroundColor = "orange"
        MStext.innerHTML = "SunLight"
    }
}

colorThemeBtn.addEventListener("click", mudaCor);
