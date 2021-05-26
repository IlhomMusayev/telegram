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
const chatModalElement = document.querySelector('.Chat-section')//modal chat
const chatClickBtnElement = document.querySelectorAll('.chat-item')[0]

chatClickBtnElement.addEventListener('click', e => {
    chatModalElement.style.display = 'block'
})
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		chatModalElement.style.display = 'none'
	}
});
// Menu
const settingsMenuModalElement = document.querySelector('.Menu')
const settingsMenuBtnElement = document.querySelector('.mini-menu-btn')

settingsMenuBtnElement.addEventListener('click', e => {
    if(settingsMenuModalElement.style.display == 'none'){
        settingsMenuModalElement.style.display = 'block'
    }else{
        settingsMenuModalElement.style.display = 'none'
    }
})