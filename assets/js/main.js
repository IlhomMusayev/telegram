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
// Chat


// Menu
const settingsMenuModalElement = document.querySelector('.Menu')
const settingsMenuBtnElement = document.querySelector('.mini-menu-btn')

settingsMenuBtnElement.addEventListener('click', e => {
    if (settingsMenuModalElement.style.display == 'none') {
        settingsMenuModalElement.style.display = 'block'
    } else {
        settingsMenuModalElement.style.display = 'none'
    }
})

// Send message



// sendMessageBtnElement.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(messageInputElement.value);
//     messageInputElement.value = ''
// })


