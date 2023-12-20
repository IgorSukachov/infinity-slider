let images = document.querySelectorAll('img')
let current = 0

slider() // Если есть кнопки, закоментировать

function slider () {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity-zero')
    }
    images[current].classList.remove('opacity-zero')
    if (current == images.length - 1) { // или current+1 == images.length
        current = 0
    } else {
        current++
    }
}
document.querySelector('.infinity-slider').addEventListener('click', slider)

// Если нужны кнопки
// document.querySelector('.button-click_up').addEventListener('click', function() {
//     if (current -1 == - 1) { // или current+1 == images.length
//         current = images.length - 1
//     } else {
//         current--
//     }
//     slider()
// })
// document.querySelector('.button-click_down').addEventListener('click', function() {
//     if (current == images.length - 1) { // или current+1 == images.length
//         current = 0
//     } else {
//         current++
//     }
//     slider()
// })