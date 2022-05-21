const input = document.querySelector('.search')
const cameraButton = document.querySelector('.camera')
const clearButton = document.querySelector('.clearAll')
const suggestions = document.querySelector('.suggestions')
const cancelButton = document.querySelector('.cancel')
console.log(clearButton) 
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
.then(res => res.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class="name"><img src="magnifying-glass-svgrepo-com.svg">${cityName}, ${stateName}</span>
        <img class = "rmSuggestion" src="clear-svgrepo-com (1).svg">
        </li>
        
        `
    }).join('')
    suggestions.innerHTML = html
  
    console.log(matchArray)
}



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
    suggestions.innerHTML=''
}


input.addEventListener('change', displayMatches)
suggestions.addEventListener('click', (e) => {

    if(e.target.classList.contains('rmSuggestion')){
    e.target.parentNode.style.opacity = 0
  
    setTimeout(()=>{
        suggestions.removeChild(e.target.parentNode)
    },300)
    
    }
})
input.addEventListener('change', clear)
input.addEventListener('keyup', displayMatches);
input.addEventListener('keyup', clear);
clearButton.addEventListener('click', clearInput)
cancelButton.addEventListener('click', removeFocusInput)

function removeFocusInput(){
    input.blur()
    input.value = ''
    suggestions.innerHTML=''
    cameraButton.classList.remove('hide')
    clearButton.classList.remove('show')
}