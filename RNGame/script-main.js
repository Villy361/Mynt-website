rolledNum = -1
rollList = []

function ButtonClicked() {
    rolledNum = Math.floor(Math.random() * 1000)
    document.getElementById("num").innerText = clamp(rolledNum)
    insertRoll(rolledNum)
}

function insertRoll(toAdd) {
    len = rollList.length
    temp = []
    temp[0] = toAdd
    for (let i = 0; i < Math.min(rollList.length, 9); i++) {
        const element = rollList[i];
        temp[i+1] = element
    }
    rollList = temp
    for (let index = 1; index < rollList.length; index++) {
        roll = rollList[index];
        document.getElementById("" + (index)).innerText = clamp(roll)
    }
}

function clamp(number) {
    return clamp3(number)
}

function clamp3(number) {
    if (number < 10) {
        return "00".concat(number)
    } else if (number < 100) {
        return "0".concat(number)
    } else {
        return "".concat(number)
    }
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
