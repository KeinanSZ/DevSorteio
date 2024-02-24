function generateNumber() {

    const number1 = Math.ceil(document.querySelector('.input-1').value)
    const number2 = Math.floor(document.querySelector('.input-2').value)

    const result = Math.floor(Math.random() * (number2 - number1) + number1)

    alert(result)
}