const searchInputElement = document.querySelector('.search-input')
const searchDefaultIconElement = document.querySelector('.search-icon-default')
const searchFocusIconElement = document.querySelector('.search-icon-focus')

searchInputElement.addEventListener('focus', e => {
    searchDefaultIconElement.style.display = 'none'
    searchFocusIconElement.style.display = 'block'

})
searchInputElement.addEventListener('focusout', e => {
    searchDefaultIconElement.style.display = 'block'
    searchFocusIconElement.style.display = 'none'

})
