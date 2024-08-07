// Initilize Variabel
const display = document.querySelector('#display');
const AC = document.getElementById('AC');
const DEL = document.getElementById('DEL');
const buttons = document.querySelectorAll('#input');
const calculate = document.querySelector('#calculate');
const percentButton = document.querySelector('#input-percent')

// EventListener foreach button input
buttons.forEach( button => {
    button.addEventListener('click', (event) => {
        display.value += event.target.value
    })
})

// EventListener for equal button
calculate.addEventListener('click', () => {
    try {
        display.value = eval(display.value).toFixed(6)
    } catch (error) {
        display.value = "Error"
    }
})

// EventListener for percent button
percentButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value / 100)
    } catch (error) {
        display.value = "Error"
    }
})

// EventListener for delete button
DEL.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1)
})

// EventListener for clear button
AC.addEventListener('click', () => {
    display.value = ""
})