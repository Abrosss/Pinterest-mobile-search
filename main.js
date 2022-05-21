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

function clearInput(){
    input.value = ''
    input.focus()
    clearButton.classList.remove('show')
    cameraButton.classList.remove('hide')
}


input.addEventListener('change', clear)
input.addEventListener('keyup', clear);
clearButton.addEventListener('click', clearInput)