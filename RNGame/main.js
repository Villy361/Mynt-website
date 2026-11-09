rolledNum = -1
rollList = []
totalRolls = 0
rollScore = 0
totalScore = 0

function ButtonClicked() {
    totalRolls++
    rolledNum = Math.floor(Math.random() * 1000)
    rollScore = scoreRoll(rolledNum)
    totalScore += rollScore
    document.getElementById("roll").innerText = clamp(rolledNum)
    document.getElementById("rTotal").innerText = totalRolls
    document.getElementById("pRoll").innerText = rollScore
    document.getElementById("pTotal").innerText = totalScore
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
        document.getElementById("n" + (index)).innerText = clamp(roll)
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
