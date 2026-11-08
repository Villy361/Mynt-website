num1 = 0
num2 = 0

function ButtonClicked(){
    num1 = Math.ceil(Math.random() * 25)
    for (let i = 0; i < num1; i++) {
        Math.random()
    }
    num2 = Math.floor(Math.random() * 100000)
    document.getElementById("num").innerText = clamp5(num2)
}

function clamp5(number) {
    if (number < 10) {
        return "0000".concat(number)
    } else if (number < 100) {
        return "000".concat(number)
    } else if (number < 1000) {
        return "00".concat(number)
    } else if (number < 10000) {
        return "0".concat(number)
    } else {
        return "".concat(number)
    }
}
