const searchInputElement = document.querySelector('.search-input')
const searchDefaultIconElement = document.querySelector('.search-icon-default')
const searchFocusIconElement = document.querySelector('.search-icon-focus')
const bodyElement = document.querySelector('body')
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


const darkModeCheckboxInputElement = document.querySelector('.dark-checkbox')
let root = document.documentElement
let mode = JSON.parse(localStorage.getItem('mode'))[0].mode
if (mode == "light") {
    darkModeCheckboxInputElement.checked = false
    root.style.setProperty('--background-color', "#fff");
    root.style.setProperty('--text', "#000");
    root.style.setProperty('--LeftCalumnColor', "#fff");
    root.style.setProperty('--LeftCalumnColorHover', "#f5f5f5");
    root.style.setProperty('--grayColor', "#0f0f0");
}else{
    darkModeCheckboxInputElement.checked = true
    root.style.setProperty('--background-color', "#0f0f0f");
    root.style.setProperty('--text', "#f0f0f0");
    root.style.setProperty('--LeftCalumnColor', "rgb(33,33,33)");
    root.style.setProperty('--LeftCalumnColorHover', "rgb(44,44,44)");
    root.style.setProperty('--grayColor', "#c0c0c0");
}
const MiddleColumnElement = document.querySelector('.MiddleColumn')
console.log(darkModeCheckboxInputElement.checked);
darkModeCheckboxInputElement.addEventListener('change', (e) => {
    bodyElement.classList.toggle('dark-mode')
    MiddleColumnElement.classList.toggle('MiddleColumnDark')
    if (darkModeCheckboxInputElement.checked == false) {
        localStorage.setItem('mode', JSON.stringify([{mode: 'light'}]))
        root.style.setProperty('--background-color', "#fff");
        root.style.setProperty('--text', "#000");
        root.style.setProperty('--LeftCalumnColor', "#fff");
        root.style.setProperty('--LeftCalumnColorHover', "#f5f5f5");
        root.style.setProperty('--grayColor', "#0f0f0");
    }else{
        localStorage.setItem('mode', JSON.stringify([{mode: 'dark'}]))
        root.style.setProperty('--background-color', "#0f0f0f");
        root.style.setProperty('--text', "#f0f0f0");
        root.style.setProperty('--LeftCalumnColor', "rgb(33,33,33)");
        root.style.setProperty('--LeftCalumnColorHover', "rgb(44,44,44)");
        root.style.setProperty('--grayColor', "#c0c0c0");
    }
})
// if(darkModeCheckboxInputElement.checked){
//     bodyElement.style.backgroundColor = '#fff'
//     bodyElement.style.color = '#000'
// }


