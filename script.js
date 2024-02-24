function generateNumber() {

    const number = Math.ceil(document.querySelector('.input-1').value)
    const namber = Math.floor(document.querySelector('.input-2').value)

    const result = Math.floor(Math.random() * (namber - number) + number)

    alert(result)
}