const input = document.querySelector('.search')
const cameraButton = document.querySelector('.camera')
const clearButton = document.querySelector('.clearAll')
console.log(clearButton) 


function clear(){
    cameraButton.classList.add('hide')
    clearButton.classList.add('show')
    if (input.value.length === 0) {
        cameraButton.classList.remove('hide')
        clearButton.classList.remove('show')
      }
}



input.addEventListener('change', clear)
input.addEventListener('keyup', clear);